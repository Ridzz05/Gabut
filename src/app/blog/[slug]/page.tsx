import { notFound } from 'next/navigation';
import BlogPageTemplate from '../../components/BlogPageTemplate';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Image from 'next/image';

// Contoh data blog post
const blogPost = {
  title: "Getting Started with Next.js 14",
  date: "March 15, 2024",
  author: {
    name: "John Doe",
    avatar: "/images/authors/john-doe.jpg"
  },
  category: "Development",
  content: `
    ## Introduction

    Next.js 14 introduces several new features that make it even more powerful for building modern web applications.

    ### Server Components

    Server Components are a new paradigm...

    ### Streaming

    Streaming allows you to...

    ## Getting Started

    First, create a new Next.js project:

    \`\`\`bash
    npx create-next-app@latest my-app
    \`\`\`

    ### Configuration

    Update your next.config.js...
  `,
  image: "/images/blog/nextjs.jpg"
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, fetch the blog post data based on the slug
  if (!blogPost) {
    notFound();
  }

  return (
    <BlogPageTemplate
      title={blogPost.title}
      showBackButton
    >
      <article className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="relative aspect-video mb-8">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Image
              src={blogPost.author.avatar}
              alt={blogPost.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-rubik text-gray-800 dark:text-white">
                {blogPost.author.name}
              </p>
              <p className="text-sm font-rubik text-gray-500 dark:text-gray-400">
                {blogPost.date}
              </p>
            </div>
          </div>
          <span className="px-3 py-1 bg-[#442781]/10 dark:bg-[#442781]/20 text-[#442781] dark:text-[#a992db] rounded-full text-sm font-rubik">
            {blogPost.category}
          </span>
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{blogPost.content}</ReactMarkdown>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <Button
            variant="secondary"
            icon={<Icon type="external" />}
            onClick={() => navigator.share({ title: blogPost.title, url: window.location.href })}
          >
            Share Article
          </Button>
        </div>
      </article>
    </BlogPageTemplate>
  );
} 