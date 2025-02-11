'use client';

// Tambahkan konfigurasi runtime edge
export const runtime = 'edge';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageTemplate from '../../components/PageTemplate';
import Icon from '../../components/Icon';

const blogPost = {
  id: '1',
  title: 'Memulai dengan Next.js 13: Panduan Lengkap untuk Pemula',
  publishDate: '15 Maret 2024',
  author: {
    name: 'M. Rizki Algipari',
    avatar: '/images/avatar/avatar.png',
    role: 'Full Stack Developer'
  },
  category: 'Tutorial',
  readTime: '10 min read',
  thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=60',
  content: `
## Pengenalan Next.js 13

Next.js 13 membawa perubahan signifikan dalam cara kita membangun aplikasi web modern. Dengan fitur-fitur baru seperti App Router, Server Components, dan Streaming, Next.js 13 menjadi pilihan utama untuk pengembangan web yang performant dan scalable.

### Fitur Utama Next.js 13

1. **App Router**
   - Routing berbasis file system yang lebih intuitif
   - Mendukung nested layouts
   - Parallel routes dan intercepting routes

2. **Server Components**
   - Rendering di server secara default
   - Performa yang lebih baik
   - Bundle size yang lebih kecil

3. **Data Fetching**
   - async/await di Server Components
   - Incremental Static Regeneration (ISR)
   - Streaming dan Suspense

### Memulai Project

\`\`\`bash
npx create-next-app@latest my-app --typescript
cd my-app
npm run dev
\`\`\`

### Struktur Project

\`\`\`
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── components/
├── package.json
└── tsconfig.json
\`\`\`

## Server Components vs Client Components

Server Components adalah paradigma baru yang memungkinkan kita menulis kode React yang dirender di server. Ini membawa beberapa keuntungan:

- Performa yang lebih baik
- SEO yang lebih baik
- Bundle size yang lebih kecil

\`\`\`typescript
// app/page.tsx
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  
  return (
    <main>
      <h1>Welcome to Next.js 13</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
\`\`\`

## Kesimpulan

Next.js 13 membawa perubahan revolusioner dalam pengembangan web modern. Dengan fitur-fitur barunya, kita dapat membangun aplikasi yang lebih cepat, lebih mudah di-maintain, dan lebih scalable.
  `,
  relatedPosts: [
    {
      id: '2',
      title: 'Tips Optimasi React Performance',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
      category: 'Development'
    },
    {
      id: '3',
      title: 'Mengenal TypeScript untuk React Developer',
      thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60',
      category: 'Tutorial'
    }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function BlogPostPage() {
  return (
    <PageTemplate>
      <motion.article
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 py-8"
      >
        {/* Header */}
        <motion.header 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#442781] dark:hover:text-[#61459C] mb-6"
          >
            <Icon type="arrow-left" className="w-4 h-4" />
            <span>Kembali ke Blog</span>
          </Link>

          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-[#442781] text-white text-sm rounded-full">
              {blogPost.category}
            </span>
            
            <h1 className="font-raleway font-bold text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-white">
              {blogPost.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <span>{blogPost.publishDate}</span>
              <span>{blogPost.readTime}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Image
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="font-medium text-gray-800 dark:text-white">
                  {blogPost.author.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {blogPost.author.role}
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div 
          className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={blogPost.thumbnail}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="prose prose-lg dark:prose-invert max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* Related Posts */}
        <motion.section 
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="font-raleway font-bold text-2xl text-gray-800 dark:text-white mb-6">
            Artikel Terkait
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blogPost.relatedPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block"
              >
                <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 bg-[#442781]/10 dark:bg-[#442781]/20 text-[#442781] dark:text-[#61459C] text-xs rounded-full mb-2">
                      {post.category}
                    </span>
                    <h3 className="font-raleway font-bold text-lg text-gray-800 dark:text-white group-hover:text-[#442781] dark:group-hover:text-[#61459C] transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </motion.section>
      </motion.article>
    </PageTemplate>
  );
} 
