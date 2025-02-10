'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from './Icon';

const containerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

interface BreadcrumbItem {
  label: string;
  path: string;
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);
  
  return paths.map((path, index) => {
    const label = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    const url = '/' + paths.slice(0, index + 1).join('/');
    
    return {
      label,
      path: url
    };
  });
}

export function Breadcrumb() {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  if (pathname === '/') return null;

  return (
    <motion.nav 
      className="mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center text-sm font-rubik">
        <li>
          <Link 
            href="/"
            className="text-gray-500 hover:text-[#442781] dark:text-gray-400 dark:hover:text-[#61459C] transition-colors flex items-center"
          >
            <Icon type="arrow-left" className="w-4 h-4 mr-1" />
            <span>Beranda</span>
          </Link>
        </li>

        <li className="mx-2 text-gray-400 dark:text-gray-600">/</li>

        {breadcrumbs.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400 dark:text-gray-600">/</span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-[#442781] dark:text-[#61459C] font-medium">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.path}
                className="text-gray-500 hover:text-[#442781] dark:text-gray-400 dark:hover:text-[#61459C] transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </motion.nav>
  );
}
