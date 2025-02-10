'use client';

import { motion } from 'framer-motion';
import Card from './Card';
import Button from './Button';
import Icon from './Icon';

const features = [
  {
    icon: "⚡",
    title: "Developer Tools",
    description: "Powerful tools to streamline your development workflow",
    link: "/tools"
  },
  {
    icon: "📺",
    title: "Streaming Platform",
    description: "Watch your favorite content with our streaming services",
    link: "/playground"
  },
  {
    icon: "📝",
    title: "Technical Blog",
    description: "Stay updated with the latest in tech and development",
    link: "/blog"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6
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

export function HomeFeatures() {
  return (
    <motion.div 
      className="mb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={cardVariants}
          >
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="font-raleway font-bold text-xl text-gray-800 dark:text-white mb-4">
                {feature.title}
              </h2>
              <p className="font-rubik text-gray-600 dark:text-gray-300 mb-6">
                {feature.description}
              </p>
              <Button
                variant="outline"
                href={feature.link}
                icon={<Icon type="arrow-right" />}
                className="w-full justify-center"
              >
                Explore
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 