'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/about/team.jpg"
          alt="K.A Tech Team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <div className="font-raleway font-bold text-xl mb-2">Kayuara Tech</div>
          <div className="font-rubik text-sm opacity-90">Building the future of web development</div>
        </div>
      </motion.div>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="prose prose-lg dark:prose-invert max-w-none"
      >
        <h2 className="font-raleway">Visi Kami</h2>
        <p className="font-rubik">
          Di K.A Tech, kami memiliki visi untuk membuat pengembangan web menjadi lebih mudah, efisien, dan menyenangkan. 
          Kami percaya bahwa setiap developer, baik pemula maupun profesional, layak mendapatkan tools terbaik untuk 
          mewujudkan ide-ide mereka menjadi kenyataan.
        </p>

        <h2 className="font-raleway">Apa yang Kami Lakukan</h2>
        <p className="font-rubik">
          Kami mengembangkan ekosistem lengkap untuk kebutuhan developer modern:
        </p>
        <ul className="font-rubik">
          <li>
            <strong>Developer Tools</strong> - Suite lengkap tools pengembangan, dari code generator hingga debugging utilities
          </li>
          <li>
            <strong>Streaming Platform</strong> - Layanan streaming untuk hiburan dan pembelajaran
          </li>
          <li>
            <strong>Technical Content</strong> - Tutorial, artikel, dan resources untuk meningkatkan skill Anda
          </li>
          <li>
            <strong>Community Hub</strong> - Platform untuk berkolaborasi dan berbagi pengetahuan
          </li>
        </ul>

        <h2 className="font-raleway">Komitmen Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
          <div className="bg-[#442781]/5 dark:bg-[#442781]/10 p-6 rounded-xl">
            <h3 className="font-raleway font-bold text-xl text-[#442781] dark:text-[#61459C] mb-3">
              Kualitas Tanpa Kompromi
            </h3>
            <p className="font-rubik text-gray-600 dark:text-gray-300 text-sm">
              Setiap fitur dan tool yang kami kembangkan melalui proses QA yang ketat untuk memastikan 
              kualitas terbaik.
            </p>
          </div>
          <div className="bg-[#442781]/5 dark:bg-[#442781]/10 p-6 rounded-xl">
            <h3 className="font-raleway font-bold text-xl text-[#442781] dark:text-[#61459C] mb-3">
              Inovasi Berkelanjutan
            </h3>
            <p className="font-rubik text-gray-600 dark:text-gray-300 text-sm">
              Kami terus berinovasi dan mengadopsi teknologi terbaru untuk memberikan solusi terbaik.
            </p>
          </div>
        </div>

        <h2 className="font-raleway">Bergabung dengan Komunitas</h2>
        <p className="font-rubik">
          Kami percaya pada kekuatan komunitas. Bergabunglah dengan ribuan developer lainnya dalam 
          misi kami untuk membuat web development lebih accessible dan enjoyable. Bersama-sama, kita 
          bisa menciptakan dampak yang lebih besar dalam dunia teknologi.
        </p>
      </motion.div>
    </div>
  );
} 