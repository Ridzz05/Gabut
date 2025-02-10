'use client';

import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { Tool } from '../types';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

interface ToolsGridProps {
  tools: Tool[];
}

export function ToolsGrid({ tools }: ToolsGridProps) {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {tools.map((tool) => (
        <motion.div
          key={tool.title}
          variants={cardVariants}
        >
          <Card className="group hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{tool.icon}</div>
            <h2 className="font-raleway font-bold text-xl text-gray-800 dark:text-white mb-4">
              {tool.title}
            </h2>
            <p className="font-rubik text-gray-600 dark:text-gray-300 mb-6">
              {tool.description}
            </p>
            <Button
              variant="outline"
              size="md"
              href={tool.status === "Available" ? tool.link : undefined}
              disabled={tool.status !== "Available"}
              icon={<Icon type="arrow-right" />}
              className="w-full justify-center"
            >
              {tool.status === "Available" ? "Try Now" : "Coming Soon"}
            </Button>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
} 