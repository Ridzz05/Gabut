'use client';

import { motion } from 'framer-motion';
import Card from './Card';
import Image from 'next/image';
import Button from './Button';
import Icon from './Icon';

const highlights = [
  {
    title: "JSON Validator",
    description: "Validate and format your JSON data with ease",
    image: "/images/tools/json-validator.jpg",
    link: "/tools/json"
  },
  {
    title: "Live TV Streaming",
    description: "Watch your favorite channels live",
    image: "/images/playground/tv-streaming.jpg",
    link: "/playground/tv"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.8
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function HomeHighlights() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {highlights.map((highlight) => (
        <motion.div
          key={highlight.title}
          variants={cardVariants}
        >
          <Card className="group overflow-hidden">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src={highlight.image}
                alt={highlight.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-raleway font-bold text-xl text-gray-800 dark:text-white mb-4">
              {highlight.title}
            </h3>
            <p className="font-rubik text-gray-600 dark:text-gray-300 mb-6">
              {highlight.description}
            </p>
            <Button
              variant="outline"
              href={highlight.link}
              icon={<Icon type="arrow-right" />}
              className="w-full justify-center"
            >
              Try Now
            </Button>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
} 