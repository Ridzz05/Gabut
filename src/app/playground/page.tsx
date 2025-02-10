'use client';

import { motion } from 'framer-motion';
import PageTemplate from '../components/PageTemplate';
import { PlaygroundHeader } from './components/PlaygroundHeader';
import { StreamingServices } from './components/StreamingServices';
import { FeaturedStream } from './components/FeaturedStream';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function PlaygroundPage() {
  return (
    <PageTemplate>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <PlaygroundHeader />

        {/* Featured Stream */}
        <FeaturedStream />

        {/* Streaming Services */}
        <section className="mt-20">
          <motion.h2 
            className="font-raleway font-bold text-2xl text-gray-800 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Layanan Streaming
          </motion.h2>
          <StreamingServices />
        </section>

        {/* Coming Soon Section */}
        <motion.section 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-[#442781]/5 to-[#61459C]/5 dark:from-[#442781]/10 dark:to-[#61459C]/10 rounded-2xl p-8 text-center">
            <h2 className="font-raleway font-bold text-2xl text-gray-800 dark:text-white mb-4">
              Fitur Mendatang
            </h2>
            <p className="font-rubik text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Kami terus mengembangkan fitur-fitur baru untuk meningkatkan pengalaman streaming Anda. 
              Nantikan pembaruan selanjutnya!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🎮",
                  title: "Game Streaming",
                  description: "Streaming game favorit Anda"
                },
                {
                  icon: "🎥",
                  title: "Movie Streaming",
                  description: "Nonton film dan serial terbaru"
                },
                {
                  icon: "🎙️",
                  title: "Podcast",
                  description: "Dengarkan podcast terbaik"
                },
                {
                  icon: "📱",
                  title: "Mobile App",
                  description: "Akses dari perangkat mobile"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-rubik text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section 
          className="mt-20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
            <h2 className="font-raleway font-bold text-2xl text-gray-800 dark:text-white mb-4">
              Tetap Terhubung
            </h2>
            <p className="font-rubik text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Dapatkan informasi terbaru tentang fitur dan layanan streaming kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent"
              />
              <button className="px-6 py-2 bg-[#442781] hover:bg-[#61459C] text-white rounded-lg transition-colors">
                Berlangganan
              </button>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </PageTemplate>
  );
} 