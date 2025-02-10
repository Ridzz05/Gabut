'use client';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';
import type { BlogPost } from '../types';

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Hero Image */}
      <div className="relative aspect-video mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Meta Info */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-rubik text-gray-800 dark:text-white">
              {post.author.name}
            </p>
            <p className="text-sm font-rubik text-gray-500 dark:text-gray-400">
              {post.date}
            </p>
          </div>
        </div>
        <span className="px-3 py-1 bg-[#442781]/10 dark:bg-[#442781]/20 text-[#442781] dark:text-[#a992db] rounded-full text-sm font-rubik">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      {/* Share Buttons */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <Button
          variant="secondary"
          icon={<Icon type="external" />}
          onClick={() => navigator.share({ title: post.title, url: window.location.href })}
        >
          Share Article
        </Button>
      </div>
    </article>
  );
} 