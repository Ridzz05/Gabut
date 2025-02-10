const BASE_URL = '/api/radio';

// Cache untuk menyimpan data
let stationsCache: RadioStation[] = [];
let citiesCache: City[] = [];
let lastFetch = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 menit

export interface RadioStation {
  radioId: string;
  name: string;
  frequency: string;
  location: string;
  logo: string;
  streamUrl: string;
  description: string;
  category: string;
  genres: string[];
  currentTrack: string | null;
  listeners: string | null;
  like: string | null;
}

export interface City {
  name: string;
  url: string;
}

interface RadioStationResponse {
  radioId: string;
  logo: string;
  name: string;
  genres: string[];
  currentTrack: string | null;
  listeners: string | null;
  like: string | null;
  streamUrl: string;
}

const fetchWithRetry = async (url: string, options: RequestInit = {}, retries = 3) => {
  let lastError;

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Accept': 'application/json',
          ...options.headers,
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error);
      lastError = error;
      // Wait before retrying (exponential backoff)
      if (i < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
      }
    }
  }

  throw lastError;
};

export const radioApi = {
  // Fetch semua stasiun radio dengan caching
  getAllStations: async (forceRefresh = false): Promise<RadioStation[]> => {
    try {
      const now = Date.now();
      if (!forceRefresh && stationsCache.length > 0 && (now - lastFetch < CACHE_DURATION)) {
        return stationsCache;
      }

      const response = await fetchWithRetry(BASE_URL);
      const data = await response.json();
      
      stationsCache = data.map((station: RadioStationResponse) => ({
        radioId: station.radioId || '',
        logo: station.logo || '',
        name: station.name || 'Unknown Station',
        genres: Array.isArray(station.genres) ? station.genres : [],
        currentTrack: station.currentTrack || null,
        listeners: station.listeners || null,
        like: station.like || null,
        streamUrl: station.streamUrl || ''
      }));
      
      lastFetch = now;
      return stationsCache;
    } catch (error) {
      console.error('Error fetching stations:', error);
      return stationsCache;
    }
  },

  // Fetch semua kota dengan caching
  getCities: async (forceRefresh = false): Promise<City[]> => {
    try {
      const now = Date.now();
      if (!forceRefresh && citiesCache.length > 0 && (now - lastFetch < CACHE_DURATION)) {
        return citiesCache;
      }

      const response = await fetchWithRetry(`${BASE_URL}/city`);
      citiesCache = await response.json();
      return citiesCache;
    } catch (error) {
      console.error('Error fetching cities:', error);
      return citiesCache;
    }
  },

  // Fetch stasiun berdasarkan kota
  getStationsByCity: async (cityName: string): Promise<RadioStation[]> => {
    try {
      if (!cityName) return radioApi.getAllStations();

      const formattedCity = cityName
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');

      const response = await fetchWithRetry(`${BASE_URL}/city/${formattedCity}`);
      const data = await response.json();
      
      return data.map((station: RadioStationResponse) => ({
        radioId: station.radioId || '',
        logo: station.logo || '',
        name: station.name || 'Unknown Station',
        genres: Array.isArray(station.genres) ? station.genres : [],
        currentTrack: station.currentTrack || null,
        listeners: station.listeners || null,
        like: station.like || null,
        streamUrl: station.streamUrl || ''
      }));
    } catch (error) {
      console.error('Error fetching stations by city:', error);
      throw new Error('Failed to fetch stations for this city');
    }
  },

  // Search stasiun radio
  searchStations: async (query: string): Promise<RadioStation[]> => {
    try {
      if (!query.trim()) return radioApi.getAllStations();

      const encodedQuery = encodeURIComponent(query.trim());
      const response = await fetchWithRetry(`${BASE_URL}/search/${encodedQuery}`);
      const data = await response.json();
      
      return data.map((station: RadioStationResponse) => ({
        radioId: station.radioId || '',
        logo: station.logo || '',
        name: station.name || 'Unknown Station',
        genres: Array.isArray(station.genres) ? station.genres : [],
        currentTrack: station.currentTrack || null,
        listeners: station.listeners || null,
        like: station.like || null,
        streamUrl: station.streamUrl || ''
      }));
    } catch (error) {
      console.error('Error searching stations:', error);
      throw new Error('Failed to search stations');
    }
  }
}; 