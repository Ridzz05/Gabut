'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../../components/Card';

const values = [
  {
    icon: "💡",
    title: "Innovation",
    description: "We constantly push boundaries and explore new technologies to create better solutions."
  },
  {
    icon: "🎯",
    title: "Quality",
    description: "We maintain high standards in everything we do, from code to user experience."
  },
  {
    icon: "🤝",
    title: "Community",
    description: "We believe in the power of community and collaborative development."
  },
  {
    icon: "🔄",
    title: "Growth",
    description: "We're committed to continuous learning and improvement."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function Values() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center font-raleway font-bold text-3xl text-gray-800 dark:text-white mb-12"
      >
        Our Values
      </motion.h2>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {values.map((value) => (
          <motion.div
            key={value.title}
            variants={cardVariants}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-raleway font-bold text-xl text-gray-800 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="font-rubik text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 