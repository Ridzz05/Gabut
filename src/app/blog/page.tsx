'use client';

import { motion } from 'framer-motion';
import { BlogSidebar } from './components/BlogSidebar';
import PageTemplate from '../components/PageTemplate';
import Image from 'next/image';

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

export default function BlogPage() {
  return (
    <PageTemplate>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-raleway font-bold text-3xl md:text-4xl text-gray-800 dark:text-white mb-4">
            Blog & Artikel
          </h1>
          <p className="font-rubik text-lg text-gray-600 dark:text-gray-300">
            Temukan artikel terbaru seputar teknologi dan pengembangan web
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Featured Post */}
            <div className="mb-8">
              <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden mb-6">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60"
                  alt="Featured post"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="inline-block px-3 py-1 bg-[#442781] text-white text-sm rounded-full mb-3">
                    Tutorial
                  </span>
                  <h2 className="font-raleway font-bold text-2xl sm:text-3xl text-white mb-2">
                    Memulai dengan Next.js 13
                  </h2>
                  <p className="text-gray-200 text-sm sm:text-base line-clamp-2">
                    Panduan lengkap memulai pengembangan web dengan Next.js 13 dan fitur-fitur terbarunya
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <motion.article
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <div className="relative h-48">
                    <Image
                      src={`https://images.unsplash.com/photo-${1555066931 + i}-4365d14bab8c?w=800&auto=format&fit=crop&q=60`}
                      alt="Post thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 bg-[#442781]/10 dark:bg-[#442781]/20 text-[#442781] dark:text-[#61459C] text-xs rounded-full mb-2">
                      Development
                    </span>
                    <h3 className="font-raleway font-bold text-lg text-gray-800 dark:text-white mb-2 line-clamp-2">
                      Tips Optimasi React Performance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                      Pelajari cara meningkatkan performa aplikasi React Anda dengan teknik optimasi terbaru
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
          
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <BlogSidebar />
          </aside>
        </div>
      </motion.div>
    </PageTemplate>
  );
} 