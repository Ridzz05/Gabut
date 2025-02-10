'use client';

import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Image from 'next/image';

const posts = [
  {
    title: "Getting Started with Next.js 13",
    excerpt: "Learn how to build modern web applications with Next.js 13 and its powerful features",
    image: "/images/blog/nextjs.jpg",
    category: "Web Development",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "getting-started-with-nextjs-13"
  },
  {
    title: "Understanding TypeScript Generics",
    excerpt: "Deep dive into TypeScript generics and how to use them effectively in your projects",
    image: "/images/blog/typescript.jpg",
    category: "Programming",
    date: "March 12, 2024",
    readTime: "7 min read",
    slug: "understanding-typescript-generics"
  },
  {
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt: "Master responsive design using Tailwind CSS utility-first approach",
    image: "/images/blog/tailwind.jpg",
    category: "CSS",
    date: "March 10, 2024",
    readTime: "6 min read",
    slug: "responsive-layouts-with-tailwind"
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

export function BlogPosts() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {posts.map((post) => (
        <motion.div
          key={post.slug}
          variants={cardVariants}
        >
          <Card className="group hover:shadow-lg transition-all">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-[#442781] text-white text-xs rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="font-raleway font-bold text-xl text-gray-800 dark:text-white mb-3">
              {post.title}
            </h2>
            <p className="font-rubik text-gray-600 dark:text-gray-300 mb-6">
              {post.excerpt}
            </p>
            <Button
              variant="outline"
              href={`/blog/${post.slug}`}
              icon={<Icon type="arrow-right" />}
              className="w-full justify-center"
            >
              Read More
            </Button>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
} 