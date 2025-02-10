import { notFound } from 'next/navigation';
import BlogPageTemplate from '../../components/BlogPageTemplate';
import { BlogContent } from './components/BlogContent';
import type { BlogPost } from './types';

// Fungsi untuk fetch data blog post
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    await new Promise(resolve => setTimeout(resolve, 100));

    if (!slug) throw new Error("Slug tidak ditemukan");

    const post: BlogPost = {
      slug,
      title: `Getting Started with Next.js 14 - ${slug}`,
      date: "March 15, 2024",
      author: {
        name: "John Doe",
        avatar: "https://via.placeholder.com/40",
      },
      category: "Development",
      content: `
        ## Introduction
        Next.js 14 introduces several new features...
        
        This is article with slug: ${slug}
      `,
      image: "https://via.placeholder.com/1200x630",
    };

    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export function generateStaticParams() {
  return [
    { slug: 'getting-started' },
    { slug: 'advanced-features' },
    { slug: 'deployment' },
  ];
}

export const dynamic = "force-dynamic";

// Hapus parameter dan gunakan context
export default async function BlogPostPage() {
  // Ambil slug dari context
  const slug = window.location.pathname.split('/').pop() || '';
  const post = await getBlogPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <BlogPageTemplate title={post.title} showBackButton>
      <BlogContent post={post} />
    </BlogPageTemplate>
  );
}