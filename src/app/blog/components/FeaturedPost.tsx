'use client';

import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Heading from '../../components/Heading';
import Image from 'next/image';

export function FeaturedPost() {
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
            <span className="inline-block px-3 py-1 bg-[#442781] text-white text-sm rounded-full mb-4">
              Featured Post
            </span>
            <Heading level={2} className="mb-4">
              The Future of Web Development
            </Heading>
            <p className="font-rubik text-gray-600 dark:text-gray-300 mb-6">
              Explore emerging trends and technologies shaping the future of web development, from AI integration to WebAssembly.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/blog/future-of-web-development"
              icon={<Icon type="arrow-right" />}
            >
              Read Article
            </Button>
          </div>
          <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/images/blog/featured.jpg"
                alt="The Future of Web Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
} 