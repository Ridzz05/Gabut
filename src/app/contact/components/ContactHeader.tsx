'use client';

import { motion } from 'framer-motion';
import Heading from '../../components/Heading';

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

export function ContactHeader() {
  return (
    <motion.div 
      className="text-center mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={textVariants}>
        <Heading level={1} className="mb-4">
          Hubungi Kami
        </Heading>
      </motion.div>
      
      <motion.p 
        className="font-rubik text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        variants={textVariants}
      >
        Punya pertanyaan atau ingin berkolaborasi? Kami siap membantu Anda.
      </motion.p>
    </motion.div>
  );
} 