'use client';

import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Icon from '../../components/Icon';

const contactInfo = [
  {
    icon: "map",
    title: "Alamat",
    content: "Jl. Kayuara No. 123, Jakarta Selatan, Indonesia"
  },
  {
    icon: "mail",
    title: "Email",
    content: "hello@kayuara.tech"
  },
  {
    icon: "phone",
    title: "Telepon",
    content: "+62 812 3456 7890"
  }
];

const socialMedia = [
  { icon: "github", label: "GitHub", link: "https://github.com/kayuara" },
  { icon: "twitter", label: "Twitter", link: "https://twitter.com/kayuara" },
  { icon: "linkedin", label: "LinkedIn", link: "https://linkedin.com/company/kayuara" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function ContactInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card>
        {contactInfo.map((info) => (
          <motion.div
            key={info.title}
            variants={itemVariants}
            className="flex items-start gap-4 mb-8 last:mb-0"
          >
            <div className="p-3 rounded-lg bg-[#442781]/5 dark:bg-[#442781]/10">
              <Icon type={info.icon} className="w-6 h-6 text-[#442781] dark:text-[#61459C]" />
            </div>
            <div>
              <h3 className="font-raleway font-bold text-lg text-gray-800 dark:text-white mb-1">
                {info.title}
              </h3>
              <p className="font-rubik text-gray-600 dark:text-gray-300">
                {info.content}
              </p>
            </div>
          </motion.div>
        ))}

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <h3 className="font-raleway font-bold text-lg text-gray-800 dark:text-white mb-4">
            Ikuti Kami
          </h3>
          <div className="flex gap-4">
            {socialMedia.map((social) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="p-3 rounded-lg bg-[#442781]/5 dark:bg-[#442781]/10 hover:bg-[#442781]/10 dark:hover:bg-[#442781]/20 transition-colors"
              >
                <Icon type={social.icon} className="w-6 h-6 text-[#442781] dark:text-[#61459C]" />
              </motion.a>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
} 