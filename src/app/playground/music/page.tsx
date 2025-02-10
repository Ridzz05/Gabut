'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const musicPlaylists = [
  {
    name: 'Top Indonesian Hits',
    description: 'Lagu-lagu hits terpopuler Indonesia',
    coverUrl: '/images/playlists/indo-hits.jpg',
    songs: [
      { title: 'Sial', artist: 'Mahalini', duration: '3:45' },
      { title: 'Rumah Singgah', artist: 'NIDJI', duration: '4:12' },
      { title: 'Tak Segampang Itu', artist: 'Anggi Marito', duration: '3:58' }
    ]
  },
  {
    name: 'Nostalgia 2000an',
    description: 'Kumpulan lagu hits tahun 2000an',
    coverUrl: '/images/playlists/nostalgia.jpg',
    songs: [
      { title: 'Ada Apa Denganmu', artist: 'Peterpan', duration: '4:30' },
      { title: 'Separuh Aku', artist: 'NOAH', duration: '4:45' },
      { title: 'Laskar Pelangi', artist: 'Nidji', duration: '4:20' }
    ]
  },
  {
    name: 'Dangdut Koplo',
    description: 'Koleksi dangdut koplo terbaik',
    coverUrl: '/images/playlists/dangdut.jpg',
    songs: [
      { title: 'Cidro 2', artist: 'Denny Caknan', duration: '5:10' },
      { title: 'Los Dol', artist: 'Denny Caknan', duration: '4:50' },
      { title: 'Satru', artist: 'Denny Caknan', duration: '4:30' }
    ]
  }
];

export default function MusicPage() {
  const [selectedPlaylist, setSelectedPlaylist] = useState(musicPlaylists[0]);

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

        {/* Music Player Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 sm:p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
            {/* Cover Art */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={selectedPlaylist.coverUrl}
                  alt={selectedPlaylist.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Playlist Info & Controls */}
            <div className="flex-1 min-w-0">
              <h2 className="font-raleway font-bold text-xl sm:text-2xl text-gray-800 dark:text-white mb-2">
                {selectedPlaylist.name}
              </h2>
              <p className="font-rubik text-gray-600 dark:text-gray-400 mb-6">
                {selectedPlaylist.description}
              </p>

              {/* Song List */}
              <div className="space-y-3">
                {selectedPlaylist.songs.map((song, index) => (
                  <div
                    key={song.title}
                    className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-[#442781] text-white">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-rubik font-medium text-gray-800 dark:text-white truncate">
                        {song.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {song.artist}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                      {song.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Playlist Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {musicPlaylists.map((playlist) => (
            <button
              key={playlist.name}
              onClick={() => setSelectedPlaylist(playlist)}
              className={`p-4 rounded-xl border transition-all ${
                selectedPlaylist.name === playlist.name
                  ? 'border-[#442781] dark:border-[#61459C] bg-[#442781]/5 dark:bg-[#61459C]/5'
                  : 'border-gray-100 dark:border-gray-700 hover:border-[#442781] dark:hover:border-[#61459C]'
              }`}
            >
              <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                <Image
                  src={playlist.coverUrl}
                  alt={playlist.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-1 truncate">
                {playlist.name}
              </h3>
              <p className="font-rubik text-sm text-gray-600 dark:text-gray-400">
                {playlist.songs.length} lagu
              </p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
