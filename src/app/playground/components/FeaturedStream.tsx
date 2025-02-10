'use client';

import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Heading from '../../components/Heading';

export function FeaturedStream() {
  return (
    <motion.div 
      className="mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <Card className="bg-gradient-to-br from-[#442781]/10 to-[#61459C]/10 dark:from-[#442781]/20 dark:to-[#61459C]/20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <Heading level={2} className="mb-4">
              Featured: Live Radio
            </Heading>
            <p className="font-rubik text-gray-600 dark:text-gray-300 mb-6">
              Listen to your favorite radio stations from around the world with our advanced streaming player.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/playground/radio"
              icon={<Icon type="arrow-right" />}
            >
              Start Listening
            </Button>
          </div>
          <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#442781] to-[#61459C] flex items-center justify-center text-6xl">
            📻
          </div>
        </div>
      </Card>
    </motion.div>
  );
} 