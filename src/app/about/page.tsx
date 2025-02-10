'use client';

import { motion } from 'framer-motion';
import { Stats } from './components/Stats';
import { Values } from './components/Values';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import PageTemplate from '../components/PageTemplate';

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

export default function AboutPage() {
  return (
    <PageTemplate>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <motion.section className="text-center mb-20" variants={textVariants}>
          <motion.h1 
            className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 dark:text-white mb-6"
            variants={textVariants}
          >
            Tentang K.A Tech
          </motion.h1>
          <motion.p 
            className="font-rubik text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={textVariants}
          >
            Kami adalah platform inovatif yang menggabungkan alat pengembangan, layanan streaming, 
            dan wawasan teknis untuk membantu Anda tetap terdepan dalam dunia teknologi yang terus berkembang.
          </motion.p>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          variants={textVariants}
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
              alt="Tim K.A Tech"
              className="object-cover w-full h-full"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-raleway font-bold text-3xl text-gray-800 dark:text-white">
              Misi Kami
            </h2>
            <p className="font-rubik text-gray-600 dark:text-gray-300">
              Menyediakan solusi teknologi terbaik dan inovatif yang membantu pengembang dan pengguna 
              dalam mencapai tujuan mereka. Kami berkomitmen untuk terus berinovasi dan memberikan 
              pengalaman terbaik bagi pengguna kami.
            </p>
            <ul className="space-y-4">
              {[
                'Mengembangkan alat yang intuitif dan efisien',
                'Memberikan layanan streaming berkualitas tinggi',
                'Berbagi pengetahuan melalui konten edukatif',
                'Membangun komunitas teknologi yang inklusif'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-5 h-5 rounded-full bg-[#442781] dark:bg-[#61459C] flex items-center justify-center text-white text-sm">
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Stats Section */}
        <Stats />

        {/* Values Section */}
        <Values />

        {/* Team Section */}
        <TeamSection />

        {/* Contact Section */}
        <ContactSection />
      </motion.div>
    </PageTemplate>
  );
} 