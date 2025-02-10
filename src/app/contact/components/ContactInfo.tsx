'use client';

import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Icon from '../../components/Icon';
import type { IconType } from '../../components/Icon';

interface ContactInfo {
  title: string;
  description: string;
  icon: IconType;
  link?: {
    text: string;
    url: string;
  };
}

const contactInfo: ContactInfo[] = [
  {
    title: 'Email',
    description: 'Kirim email kepada kami',
    icon: 'external',
    link: {
      text: 'hello@example.com',
      url: 'mailto:hello@example.com'
    }
  },
  {
    title: 'GitHub',
    description: 'Lihat proyek kami di GitHub',
    icon: 'external',
    link: {
      text: 'github.com/yourusername',
      url: 'https://github.com/yourusername'
    }
  },
  {
    title: 'Lokasi',
    description: 'Indonesia',
    icon: 'external'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function ContactInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {contactInfo.map((info) => (
        <motion.div key={info.title} variants={itemVariants}>
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#442781]/5 dark:bg-[#442781]/10">
                <Icon type={info.icon} className="w-6 h-6 text-[#442781] dark:text-[#61459C]" />
              </div>
              <div>
                <h3 className="font-raleway font-bold text-lg text-gray-800 dark:text-white mb-1">
                  {info.title}
                </h3>
                <p className="font-rubik text-gray-600 dark:text-gray-300 mb-2">
                  {info.description}
                </p>
                {info.link && (
                  <a
                    href={info.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-rubik text-[#442781] dark:text-[#61459C] hover:underline"
                  >
                    {info.link.text}
                  </a>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
} 