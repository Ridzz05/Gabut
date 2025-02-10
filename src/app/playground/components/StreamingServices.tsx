'use client';

import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Image from 'next/image';

const services = [
  {
    title: "Live TV",
    description: "Watch your favorite TV channels live",
    icon: "📺",
    image: "/images/playground/tv.jpg",
    link: "/playground/tv",
    status: "Available"
  },
  {
    title: "Radio",
    description: "Listen to worldwide radio stations",
    icon: "📻",
    image: "/images/playground/radio.jpg",
    link: "/playground/radio",
    status: "Available"
  },
  {
    title: "Movies",
    description: "Stream the latest movies and shows",
    icon: "🎬",
    image: "/images/playground/movies.jpg",
    link: "/playground/movies",
    status: "Coming Soon"
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

export function StreamingServices() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {services.map((service) => (
        <motion.div
          key={service.title}
          variants={cardVariants}
        >
          <Card className="group hover:shadow-lg transition-all">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-4xl">
                {service.icon}
              </div>
            </div>
            <h2 className="font-raleway font-bold text-xl text-gray-800 dark:text-white mb-2">
              {service.title}
            </h2>
            <p className="font-rubik text-gray-600 dark:text-gray-300 mb-6">
              {service.description}
            </p>
            <Button
              variant="outline"
              href={service.status === "Available" ? service.link : undefined}
              disabled={service.status !== "Available"}
              icon={<Icon type="arrow-right" />}
              className="w-full justify-center"
            >
              {service.status === "Available" ? "Watch Now" : "Coming Soon"}
            </Button>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
} 