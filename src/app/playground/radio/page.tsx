'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRadioPlayer } from '../../hooks/useRadioPlayer';
import type { RadioStation } from '../../services/radioApi';
import MediaPlayer from '../../components/MediaPlayer';

const radioStations: RadioStation[] = [
  {
    radioId: '1',
    name: 'Prambors Radio',
    frequency: '102.2 FM',
    location: 'Jakarta',
    logo: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&auto=format&fit=crop&q=60',
    streamUrl: 'https://stream.radiojar.com/4ywdgup3bnzuv',
    description: 'Jakarta\'s #1 Hit Music Station',
    category: 'Pop',
    genres: ['Pop', 'Top 40'],
    currentTrack: null,
    listeners: null,
    like: null
  },
  {
    radioId: '2',
    name: 'Hard Rock FM',
    frequency: '87.6 FM',
    location: 'Jakarta',
    logo: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&auto=format&fit=crop&q=60',
    streamUrl: 'https://stream.radiojar.com/fnex9bkswk8uv',
    description: 'Indonesia\'s Best Rock Station',
    category: 'Rock',
    genres: ['Rock', 'Alternative'],
    currentTrack: null,
    listeners: null,
    like: null
  },
  {
    radioId: '3',
    name: 'Jak FM',
    frequency: '101.0 FM',
    location: 'Jakarta',
    logo: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&auto=format&fit=crop&q=60',
    streamUrl: 'https://stream.radiojar.com/u8b5f5k8pg5tv',
    description: 'Jakarta\'s Best Music',
    category: 'Pop',
    genres: ['Pop', 'Jazz'],
    currentTrack: null,
    listeners: null,
    like: null
  },
  {
    radioId: '4',
    name: 'I-Radio',
    frequency: '89.6 FM',
    location: 'Jakarta',
    logo: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&auto=format&fit=crop&q=60',
    streamUrl: 'https://stream.radiojar.com/4ywdgup3bnzuv',
    description: '100% Musik Indonesia',
    category: 'Pop',
    genres: ['Pop Indonesia'],
    currentTrack: null,
    listeners: null,
    like: null
  },
  {
    radioId: '5',
    name: 'Delta FM',
    frequency: '99.1 FM',
    location: 'Jakarta',
    logo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=60',
    streamUrl: 'https://stream.radiojar.com/4ywdgup3bnzuv',
    description: 'Musik Hits Terbaik',
    category: 'Pop',
    genres: ['Pop', 'Dangdut'],
    currentTrack: null,
    listeners: null,
    like: null
  }
];

const categories = ['Semua', 'Pop', 'Rock', 'Jazz', 'Dangdut', 'News'];

const StationImage = memo(({ src, alt }: { src: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  return (
    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setImgSrc('https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=400&auto=format&fit=crop&q=60')}
      />
    </div>
  );
});

StationImage.displayName = 'StationImage';

export default function RadioPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const { currentStation, isPlaying, volume, isMuted, handlePlay, handleStationChange, handleVolumeChange, toggleMute } = useRadioPlayer();

  const filteredStations = selectedCategory === 'Semua'
    ? radioStations
    : radioStations.filter(station => station.genres.includes(selectedCategory));

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <main className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/playground"
          className="inline-flex items-center text-[#442781] dark:text-[#a992db] hover:text-[#61459C] dark:hover:text-white mb-6 group"
        >
          <svg
            className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Kembali
        </Link>

        {/* Media Player */}
        <div className="mb-8">
          <MediaPlayer
            station={currentStation}
            isPlaying={isPlaying}
            volume={volume}
            isMuted={isMuted}
            onPlay={handlePlay}
            onVolumeChange={handleVolumeChange}
            onMute={toggleMute}
          />
        </div>

        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors flex-shrink-0 ${
                  selectedCategory === category
                    ? 'bg-[#442781] text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Station List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredStations.map((station) => {
            const isActive = currentStation?.radioId === station.radioId;
            return (
              <button
                key={station.radioId}
                onClick={() => handleStationChange(station)}
                className={`p-4 rounded-xl border transition-all ${
                  isActive
                    ? 'border-[#442781] dark:border-[#61459C] bg-[#442781]/5 dark:bg-[#61459C]/5'
                    : 'border-gray-200 dark:border-gray-700 hover:border-[#442781] dark:hover:border-[#61459C]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <StationImage 
                    src={station.logo} 
                    alt={station.name} 
                  />
                  <div className="flex-1 text-left min-w-0">
                    <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-1 truncate">
                      {station.name}
                    </h3>
                    <p className="font-rubik text-sm text-gray-600 dark:text-gray-400 truncate">
                      {station.frequency}
                    </p>
                    <p className="font-rubik text-sm text-[#442781] dark:text-[#a992db] truncate">
                      {station.location}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
} 