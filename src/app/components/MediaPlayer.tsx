'use client';

import { memo } from 'react';
import Image from 'next/image';
import { getValidImageUrl, handleImageError } from '../services/imageUtils';
import type { RadioStation } from '../services/radioApi';

interface MediaPlayerProps {
  station: RadioStation | null;
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  onPlay: () => void;
  onVolumeChange: (volume: number) => void;
  onMute: () => void;
}

const MediaPlayer = memo(function MediaPlayer({
  station,
  isPlaying,
  volume,
  isMuted,
  onPlay,
  onVolumeChange,
  onMute
}: MediaPlayerProps) {
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-8 p-6">
        {/* Album Art */}
        <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-lg group">
          <Image
            src={getValidImageUrl(station?.logo)}
            alt={station?.name || 'Select a station'}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              handleImageError(img.src, img);
            }}
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={onPlay}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              disabled={!station}
            >
              {isPlaying ? (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex-1 w-full">
          <div className="flex flex-col gap-4">
            {/* Station Info */}
            <div className="text-center md:text-left">
              <h2 className="font-raleway font-bold text-2xl text-gray-800 dark:text-white mb-2">
                {station?.name || 'Select a Station'}
              </h2>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-2">
                {station?.genres?.map((genre) => (
                  <span
                    key={genre}
                    className="px-2 py-1 text-xs rounded-full bg-[#442781]/10 dark:bg-[#442781]/20 text-[#442781] dark:text-[#a992db]"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <p className="font-rubik text-gray-600 dark:text-gray-300 mb-4">
                {station?.currentTrack || 'No track playing'}
              </p>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <button
                onClick={onPlay}
                className="w-12 h-12 rounded-full bg-[#442781] text-white flex items-center justify-center hover:bg-[#61459C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!station}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-4">
              <button
                onClick={onMute}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {volume === 0 || isMuted ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => onVolumeChange(parseInt(e.target.value))}
                className="flex-1 h-2 rounded-lg appearance-none bg-gray-200 dark:bg-gray-700"
                style={{
                  backgroundImage: `linear-gradient(to right, #442781 ${volume}%, transparent ${volume}%)`
                }}
              />
              <span className="text-sm text-gray-600 dark:text-gray-300 w-12 text-center">
                {volume}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MediaPlayer; 