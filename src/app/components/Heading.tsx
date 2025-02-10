import type { ReactNode } from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3;
  children: ReactNode;
  className?: string;
}

export default function Heading({ level = 1, children, className = '' }: HeadingProps) {
  const baseStyles = 'font-raleway font-bold text-gray-800 dark:text-white';
  
  const sizes = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl'
  };

  // Gunakan tipe HTML element langsung
  type HeadingTag = 'h1' | 'h2' | 'h3';
  const Tag = `h${level}` as HeadingTag;

  return (
    <Tag className={`${baseStyles} ${sizes[level]} ${className}`}>
      {children}
    </Tag>
  );
} 