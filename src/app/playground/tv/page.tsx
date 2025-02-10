'use client';

import { useState } from 'react';
import Link from 'next/link';

const tvChannels = [
  {
    name: 'RCTI',
    embedUrl: 'https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGcmN0aSUyRmluZXdzaWQmaGVpZ2h0PTEwMCUyNSZ3aWR0aD0xMDAlMjU=',
    logo: '/images/channels/rcti.png',
    status: 'Online',
    limit: 'No Limit'
  },
  {
    name: 'GTV',
    embedUrl: 'https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGZ3R2JTJGaW5ld3NpZCZoZWlnaHQ9MTAwJTI1JndpZHRoPTEwMCUyNQ==',
    logo: '/images/channels/gtv.png',
    status: 'Online',
    limit: 'No Limit'
  },
  {
    name: 'iNews',
    embedUrl: 'https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGaW5ld3MlMkZpbmV3c2lkJmhlaWdodD0xMDAlMjUmd2lkdGg9MTAwJTI1',
    logo: '/images/channels/inews.png',
    status: 'Online',
    limit: 'No Limit'
  },
  {
    name: 'MNCTV',
    embedUrl: 'https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGbW5jdHYlMkZpbmV3c2lkJmhlaWdodD0xMDAlMjUmd2lkdGg9MTAwJTI1',
    logo: '/images/channels/mnctv.png',
    status: 'Online',
    limit: 'No Limit'
  },
  {
    name: 'TRANS7',
    embedUrl: 'https://20.detik.com/watch/livestreaming-trans7',
    logo: '/images/channels/trans7.png',
    status: 'Online',
    limit: 'No Limit'
  },
  {
    name: 'TRANS TV',
    embedUrl: 'https://20.detik.com/watch/livestreaming-transtv',
    logo: '/images/channels/transtv.png',
    status: 'Online',
    limit: 'No Limit'
  },
  {
    name: 'CNN INDONESIA',
    embedUrl: 'https://www.cnnindonesia.com/tv/embed?ref=transmedia',
    logo: '/images/channels/cnn.png',
    status: 'Online',
    limit: 'No Limit'
  },
  {
    name: 'METRO TV',
    embedUrl: 'https://www.dailymotion.com/embed/video/k236ofBIxajxDiti8CY?autoPlay=1&queue-enable=false',
    logo: '/images/channels/metrotv.png',
    status: 'Online',
    limit: 'No Limit'
  }
];

export default function TVPage() {
  const [selectedChannel, setSelectedChannel] = useState(tvChannels[0]);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/playground"
          className="inline-flex items-center text-[#442781] dark:text-[#a992db] hover:text-[#61459C] dark:hover:text-white mb-8 group"
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
          <span className="font-rubik">Back to Playground</span>
        </Link>

        {/* Video Player Section */}
        <div className="mb-12">
          <div className="bg-black rounded-xl overflow-hidden aspect-video mb-4">
            <iframe
              src={selectedChannel.embedUrl}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-raleway font-semibold text-2xl text-gray-800 dark:text-white">
                {selectedChannel.name}
              </h2>
              <p className="font-rubik text-sm text-gray-600 dark:text-gray-400">
                Status: {selectedChannel.status} • {selectedChannel.limit}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title="Picture in Picture"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 8v6m0 0l-3-3m3 3l3-3m-8 8h10a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <button
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title="Fullscreen"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Channel List Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="font-raleway font-semibold text-xl text-gray-800 dark:text-white mb-6">
            Available Channels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tvChannels.map((channel) => (
              <button
                key={channel.name}
                onClick={() => setSelectedChannel(channel)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  selectedChannel.name === channel.name
                    ? 'bg-[#442781] text-white'
                    : 'bg-gray-50 dark:bg-gray-700/50 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className="w-10 h-10 relative flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded">
                  <span className="text-sm font-medium">{channel.name.substring(0, 2)}</span>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-rubik text-sm font-medium">{channel.name}</h3>
                  <p className={`text-xs ${
                    selectedChannel.name === channel.name
                      ? 'text-white/80'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {channel.status}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 