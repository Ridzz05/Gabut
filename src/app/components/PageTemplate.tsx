import { ReactNode } from 'react';
import { Breadcrumb } from './Breadcrumb';

interface PageTemplateProps {
  children: ReactNode;
  showBreadcrumb?: boolean;
}

export default function PageTemplate({ children, showBreadcrumb = true }: PageTemplateProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      {showBreadcrumb && <Breadcrumb />}
      {children}
    </main>
  );
} 