'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  thumbnail: string;
}

const recentPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Memulai dengan Next.js 13',
    excerpt: 'Panduan lengkap memulai pengembangan web dengan Next.js 13',
    date: '2024-03-15',
    category: 'Tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '2',
    title: 'Tips Optimasi React Performance',
    excerpt: 'Cara meningkatkan performa aplikasi React Anda',
    date: '2024-03-10',
    category: 'Tips & Tricks',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '3',
    title: 'Mengenal TypeScript',
    excerpt: 'Pengenalan dasar TypeScript untuk pengembang JavaScript',
    date: '2024-03-05',
    category: 'Tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60'
  }
];

const categories = [
  { name: 'Tutorial', count: 12 },
  { name: 'Tips & Tricks', count: 8 },
  { name: 'Teknologi', count: 6 },
  { name: 'Pengembangan Web', count: 10 },
  { name: 'Mobile Development', count: 4 }
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

export function BlogSidebar() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Pencarian */}
      <div className="relative">
        <input
          type="text"
          placeholder="Cari artikel..."
          className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Artikel Terbaru */}
      <div>
        <h3 className="font-raleway font-bold text-lg text-gray-800 dark:text-white mb-4">
          Artikel Terbaru
        </h3>
        <motion.div variants={containerVariants} className="space-y-4">
          {recentPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="flex gap-4 group"
            >
              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/blog/${post.id}`}
                  className="font-raleway font-semibold text-gray-800 dark:text-white hover:text-[#442781] dark:hover:text-[#61459C] transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(post.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Kategori */}
      <div>
        <h3 className="font-raleway font-bold text-lg text-gray-800 dark:text-white mb-4">
          Kategori
        </h3>
        <motion.div variants={containerVariants} className="space-y-2">
          {categories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <Link
                href={`/blog/category/${category.name.toLowerCase()}`}
                className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
              >
                <span className="font-rubik text-gray-700 dark:text-gray-300 group-hover:text-[#442781] dark:group-hover:text-[#61459C]">
                  {category.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {category.count}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tag Cloud */}
      <div>
        <h3 className="font-raleway font-bold text-lg text-gray-800 dark:text-white mb-4">
          Tag Populer
        </h3>
        <div className="flex flex-wrap gap-2">
          {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Web Development', 'UI/UX', 'API'].map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#442781] hover:text-white dark:hover:bg-[#61459C] transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 