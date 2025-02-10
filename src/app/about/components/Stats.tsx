'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const stats = [
  { label: "Projects Completed", value: 100, suffix: "+" },
  { label: "Happy Users", value: 1000, suffix: "+" },
  { label: "Countries Reached", value: 25, suffix: "+" },
  { label: "Tools Available", value: 15, suffix: "" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts(prev => prev.map((count, i) => i === index ? Math.floor(current) : count));
        }, duration / steps);
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-16 bg-gradient-to-br from-[#442781]/5 to-[#61459C]/5 dark:from-[#442781]/10 dark:to-[#61459C]/10 rounded-3xl"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="text-center"
          >
            <div className="font-raleway font-bold text-4xl text-[#442781] dark:text-[#61459C] mb-2">
              {counts[index]}{stat.suffix}
            </div>
            <div className="font-rubik text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 