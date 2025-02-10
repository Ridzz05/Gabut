'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Handle form submission
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-rubik text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-rubik text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block font-rubik text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subjek
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-rubik text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
          </Button>
        </form>
      </Card>
    </motion.div>
  );
} 