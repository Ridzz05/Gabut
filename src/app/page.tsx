'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HomeHighlights } from './components/HomeHighlights';
import { HomeFeatures } from './components/HomeFeatures';
import Button from './components/Button';
import Icon from './components/Icon';

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

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative pt-20 pb-32 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#442781]/5 to-[#61459C]/5 dark:from-[#442781]/10 dark:to-[#61459C]/10" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div variants={textVariants}>
              <Image
                src="/icons/logo.svg"
                alt="K.A Tech Logo"
                width={120}
                height={120}
                className="mx-auto mb-8"
                priority
              />
            </motion.div>
            
            <motion.h1 
              className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 dark:text-white mb-6"
              variants={textVariants}
            >
              Solusi Digital untuk
              <span className="text-[#442781] dark:text-[#61459C]"> Developer Modern</span>
            </motion.h1>
            
            <motion.p 
              className="font-rubik text-lg text-gray-600 dark:text-gray-300 mb-8"
              variants={textVariants}
            >
              Platform all-in-one yang menyediakan tools developer, layanan streaming,
              dan wawasan teknis untuk meningkatkan produktivitas Anda
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={textVariants}
            >
              <Button
                variant="primary"
                size="lg"
                href="/tools"
                icon={<Icon type="arrow-right" />}
              >
                Jelajahi Tools
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/about"
              >
                Pelajari Lebih Lanjut
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-center font-raleway font-bold text-3xl text-gray-800 dark:text-white mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-center font-rubik text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Tingkatkan workflow development Anda dengan berbagai tools dan layanan yang kami sediakan
            </p>
          </motion.div>
          <HomeFeatures />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-center font-raleway font-bold text-3xl text-gray-800 dark:text-white mb-4">
              Layanan Populer
            </h2>
            <p className="text-center font-rubik text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Jelajahi layanan terpopuler kami yang telah membantu ribuan developer
            </p>
          </motion.div>
          <HomeHighlights />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#442781] to-[#61459C] rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="font-raleway font-bold text-3xl mb-4">
              Mulai Sekarang
            </h2>
            <p className="font-rubik mb-8 max-w-2xl mx-auto opacity-90">
              Bergabunglah dengan ribuan developer yang telah menggunakan platform kami
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                href="/tools"
                className="!text-white !border-white hover:!bg-white hover:!text-[#442781]"
              >
                Lihat Semua Tools
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/playground"
                className="!text-white !border-white hover:!bg-white hover:!text-[#442781]"
              >
                Coba Playground
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
