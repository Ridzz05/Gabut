'use client';

import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getValidImageUrl } from '../services/imageUtils';
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
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      >
        <div className="relative">
          {/* Background Image with Blur */}
          {station && (
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={getValidImageUrl(station.logo)}
                alt=""
                fill
                className="object-cover opacity-30 dark:opacity-20 blur-2xl scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white dark:from-gray-800/80 dark:to-gray-800" />
            </div>
          )}

          {/* Content */}
          <div className="relative p-4 sm:p-6">
            <div className="flex items-center gap-6">
              {/* Station Image */}
              <motion.div 
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700"
                initial={false}
                animate={isPlaying ? { scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                {station ? (
                  <Image
                    src={getValidImageUrl(station.logo)}
                    alt={station.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                )}
              </motion.div>

              {/* Station Info */}
              <div className="flex-1 min-w-0">
                <motion.h2 
                  className="font-raleway font-bold text-xl text-gray-800 dark:text-white mb-1 truncate"
                  layout
                >
                  {station?.name || 'Pilih Radio'}
                </motion.h2>
                <motion.p 
                  className="font-rubik text-sm text-gray-600 dark:text-gray-400 truncate"
                  layout
                >
                  {station ? `${station.frequency} • ${station.location}` : 'Tidak ada radio yang dipilih'}
                </motion.p>
                {station?.currentTrack && (
                  <motion.p 
                    className="font-rubik text-sm text-[#442781] dark:text-[#61459C] mt-1 truncate"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Now Playing: {station.currentTrack}
                  </motion.p>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                {/* Volume Control */}
                <div className="hidden sm:flex items-center gap-2">
                  <button
                    onClick={onMute}
                    className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
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
                    className="w-20 h-1 rounded-lg appearance-none bg-gray-200 dark:bg-gray-700 cursor-pointer"
                    style={{
                      backgroundImage: `linear-gradient(to right, #442781 ${volume}%, transparent ${volume}%)`
                    }}
                  />
                </div>

                {/* Play/Pause Button */}
                <motion.button
                  onClick={onPlay}
                  disabled={!station}
                  className={`p-3 rounded-full transition-colors ${
                    station 
                      ? 'bg-[#442781] text-white hover:bg-[#61459C]' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Progress Animation */}
            {isPlaying && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#442781]/10 dark:bg-[#61459C]/10 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div 
                  className="h-full bg-[#442781] dark:bg-[#61459C]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

export default MediaPlayer; 