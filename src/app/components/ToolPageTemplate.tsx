import PageTemplate from './PageTemplate';
import Card from './Card';
import Heading from './Heading';
import Icon from './Icon';
import Link from 'next/link';

interface ToolPageTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ToolPageTemplate({ title, description, children }: ToolPageTemplateProps) {
  return (
    <PageTemplate>
      {/* Back Button */}
      <Link
        href="/tools"
        className="inline-flex items-center text-[#442781] dark:text-[#a992db] hover:text-[#61459C] dark:hover:text-white mb-8 group"
      >
        <Icon type="arrow-left" className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
        <span className="font-rubik">Back to Tools</span>
      </Link>

      {/* Header */}
      <div className="text-center mb-12">
        <Heading level={1} className="mb-4">
          {title}
        </Heading>
        <p className="font-rubik text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Main Content */}
      <Card className="mb-8">
        {children}
      </Card>
    </PageTemplate>
  );
} 