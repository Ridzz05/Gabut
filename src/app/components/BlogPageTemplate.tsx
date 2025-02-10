import PageTemplate from './PageTemplate';
import Heading from './Heading';
import Icon from './Icon';
import Link from 'next/link';

interface BlogPageTemplateProps {
  title: string;
  description?: string;
  showBackButton?: boolean;
  children: React.ReactNode;
}

export default function BlogPageTemplate({ 
  title, 
  description, 
  showBackButton = false,
  children 
}: BlogPageTemplateProps) {
  return (
    <PageTemplate>
      {showBackButton && (
        <Link
          href="/blog"
          className="inline-flex items-center text-[#442781] dark:text-[#a992db] hover:text-[#61459C] dark:hover:text-white mb-8 group"
        >
          <Icon type="arrow-left" className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          <span className="font-rubik">Back to Blog</span>
        </Link>
      )}

      <div className="text-center mb-12">
        <Heading level={1} className="mb-4">
          {title}
        </Heading>
        {description && (
          <p className="font-rubik text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {children}
    </PageTemplate>
  );
} 