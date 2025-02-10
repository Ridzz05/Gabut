'use client';

import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

export function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="mt-20"
    >
      <Card className="text-center bg-gradient-to-br from-[#442781]/10 to-[#61459C]/10 dark:from-[#442781]/20 dark:to-[#61459C]/20 overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#442781]/5 dark:bg-[#442781]/10 rounded-full -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#61459C]/5 dark:bg-[#61459C]/10 rounded-full translate-x-16 translate-y-16" />
        
        <div className="relative">
          <h2 className="font-raleway font-bold text-3xl text-gray-800 dark:text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="font-rubik text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Have questions or want to collaborate? We&apos;d love to hear from you! Join our community and be part of something amazing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              icon={<Icon type="arrow-right" />}
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="https://github.com/yourusername"
              external
              icon={<Icon type="external" />}
            >
              GitHub
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
} 