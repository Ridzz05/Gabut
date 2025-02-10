'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRadioPlayer } from '../../hooks/useRadioPlayer';
import type { RadioStation } from '../../services/radioApi';
import MediaPlayer from '../../components/MediaPlayer';

const radioStations: RadioStation[] = [
  {
    radioId: '1',
    name: 'Radio Example 1',
    frequency: '98.7 FM',
    location: 'Jakarta',
    logo: 'https://via.placeholder.com/100',
    streamUrl: 'https://example.com/stream1',
    description: 'Jakarta\'s #1 Hit Music Station',
    category: 'Pop',
    genres: ['Pop', 'Top 40'],
    currentTrack: null,
    listeners: null,
    like: null
  },
  {
    radioId: '2',
    name: 'Radio Example 2',
    frequency: '101.3 FM',
    location: 'Bandung',
    logo: 'https://via.placeholder.com/100',
    streamUrl: 'https://example.com/stream2',
    description: 'Best Jazz in Town',
    category: 'Jazz',
    genres: ['Jazz', 'Blues'],
    currentTrack: null,
    listeners: null,
    like: null
  }
  // ... tambahkan radio station lainnya
];

const categories = ['Semua', 'Pop', 'Rock', 'Jazz', 'Dangdut'];

export default function RadioPage() {
  const {
    currentStation,
    isPlaying,
    volume,
    isMuted,
    handlePlay,
    handleStationChange,
    handleVolumeChange,
    toggleMute
  } = useRadioPlayer();

  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredStations = selectedCategory === 'Semua'
    ? radioStations
    : radioStations.filter(station => station.category === selectedCategory);

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
          <span className="font-rubik">Kembali ke Playground</span>
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
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
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

        {/* Station List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredStations.map((station) => (
            <button
              key={station.radioId}
              onClick={() => handleStationChange(station)}
              className={`p-4 rounded-xl border transition-all ${
                currentStation?.radioId === station.radioId
                  ? 'border-[#442781] dark:border-[#61459C] bg-[#442781]/5 dark:bg-[#61459C]/5'
                  : 'border-gray-200 dark:border-gray-700 hover:border-[#442781] dark:hover:border-[#61459C]'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src={station.logo}
                      alt={station.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
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
          ))}
        </div>
      </main>
    </div>
  );
} 