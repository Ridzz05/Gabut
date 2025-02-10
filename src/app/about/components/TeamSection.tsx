'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Card from '../../components/Card';

const team = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/images/team/john.jpg",
    bio: "10+ years of experience in web development and team leadership"
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: "/images/team/jane.jpg",
    bio: "Full-stack developer with expertise in React and Node.js"
  },
  {
    name: "Mike Johnson",
    role: "UI/UX Designer",
    image: "/images/team/mike.jpg",
    bio: "Passionate about creating beautiful and intuitive user interfaces"
  }
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

export function TeamSection() {
  return (
    <motion.div
      className="mt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-center font-raleway font-bold text-3xl text-gray-800 dark:text-white mb-12">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
          >
            <Card className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-raleway font-bold text-xl text-gray-800 dark:text-white mb-2">
                {member.name}
              </h3>
              <div className="text-[#442781] dark:text-[#61459C] font-medium mb-4">
                {member.role}
              </div>
              <p className="font-rubik text-gray-600 dark:text-gray-300">
                {member.bio}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 