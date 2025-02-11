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

// Definisikan posisi dots secara statis
const dotsPositions = [
  { top: "24%", left: "90%" },
  { top: "73%", left: "34%" },
  { top: "83%", left: "64%" },
  { top: "96%", left: "38%" },
  { top: "0.5%", left: "64%" },
  { top: "17%", left: "2%" }
];

// Definisikan posisi dots untuk section features
const featureDotsPositions = [
  { top: "15%", left: "85%" },
  { top: "65%", left: "5%" },
  { top: "85%", left: "75%" },
  { top: "25%", left: "15%" }
];

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
        {/* Modern Background Pattern */}
        <div className="absolute inset-0">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#442781]/5 to-[#61459C]/5 dark:from-[#442781]/10 dark:to-[#61459C]/10" />
          
          {/* Animated dots pattern */}
          <div className="absolute inset-0">
            {dotsPositions.map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#442781]/20 dark:bg-[#442781]/30"
                style={{
                  top: position.top,
                  left: position.left,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Decorative lines */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[...Array(3)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M ${-10 + i * 40} 100 Q ${20 + i * 40} ${50 + Math.sin(i) * 20} ${50 + i * 40} 0`}
                  stroke={`rgba(68, 39, 129, ${0.03 + i * 0.01})`}
                  strokeWidth="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.5 }}
                />
              ))}
            </svg>
          </div>
        </div>

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
      <motion.section 
        className="relative py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Modern Background Pattern untuk Features */}
        <div className="absolute inset-0">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#442781]/5 via-transparent to-[#61459C]/5 dark:from-[#442781]/10 dark:to-[#61459C]/10" />
          
          {/* Animated dots pattern */}
          <div className="absolute inset-0">
            {featureDotsPositions.map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#442781]/20 dark:bg-[#442781]/30"
                style={{
                  top: position.top,
                  left: position.left,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Decorative curved lines */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[...Array(4)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M ${-20 + i * 35} 100 C ${10 + i * 35} ${70 - i * 10} ${30 + i * 35} ${50 + i * 10} ${50 + i * 35} 0`}
                  stroke={`rgba(68, 39, 129, ${0.2 - i * 0.03})`}
                  strokeWidth="0.3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, delay: i * 0.4 }}
                />
              ))}
            </svg>
          </div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_14px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-raleway font-bold text-3xl md:text-4xl text-gray-800 dark:text-white mb-4">
              Fitur Unggulan
            </h2>
            <p className="font-rubik text-lg text-gray-600 dark:text-gray-300">
              Tingkatkan workflow development Anda dengan berbagai tools dan layanan yang kami sediakan
            </p>
          </motion.div>

          {/* HomeFeatures Component */}
          <HomeFeatures />
        </div>
      </motion.section>

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
