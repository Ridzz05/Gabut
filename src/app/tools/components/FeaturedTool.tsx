'use client';

import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Heading from '../../components/Heading';

export function FeaturedTool() {
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
              Featured: Color Palette Generator
            </Heading>
            <p className="font-rubik text-gray-600 dark:text-gray-300 mb-6">
              Create beautiful color combinations for your projects with our powerful color palette generator.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/tools/color-palette"
              icon={<Icon type="arrow-right" />}
            >
              Try Color Palette
            </Button>
          </div>
          <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2 p-4 bg-gradient-to-br from-[#442781] to-[#61459C]">
              <div className="rounded-lg bg-[#442781]"></div>
              <div className="rounded-lg bg-[#61459C]"></div>
              <div className="rounded-lg bg-[#2D1A56]"></div>
              <div className="rounded-lg bg-[#8873B3]"></div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
} 