'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSidebar } from '../context/SidebarContext';
import { colors } from '../constants/colors';

interface MenuItem {
  icon: string;
  label: string;
  href: string;
  badge?: string;
}

const menuItems: MenuItem[] = [
  {
    icon: '/icons/home.svg',
    label: 'Home',
    href: '/'
  },
  {
    icon: '/icons/tools.svg',
    label: 'Tools/Utility',
    href: '/tools',
    badge: 'New'
  },
  {
    icon: '/icons/playground.svg',
    label: 'Playground',
    href: '/playground'
  },
  {
    icon: '/icons/blog.svg',
    label: 'Blog',
    href: '/blog'
  },
  {
    icon: '/icons/about.svg',
    label: 'About',
    href: '/about'
  }
];

export const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`}
  >
    <path 
      fill="currentColor" 
      d="M2.5 250.2C.9 251.7 0 253.8 0 256s.9 4.3 2.5 5.8l192 184c3.2 3.1 8.3 3 11.3-.2s2.9-8.3-.2-11.3L27.9 264 440 264c4.4 0 8-3.6 8-8s-3.6-8-8-8L27.9 248 205.5 77.8c3.2-3.1 3.3-8.1 .2-11.3s-8.1-3.3-11.3-.2l-192 184z"
    />
  </svg>
);

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64 pt-16
          bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
          border-r border-gray-100 dark:border-gray-800/50
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
        `}
      >
        <div className="h-full flex flex-col">
          {/* User Profile Section - Slightly darker background */}
          <div className="p-6 flex flex-col items-center text-center border-b border-gray-100 dark:border-gray-800/50 bg-white/50 dark:bg-gray-800/50">
            <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mb-4">
              <Image
                src="/images/avatar/avatar.png"
                alt="User Avatar"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-1">
              M. Rizki Algipari
            </h3>
            <p className="text-sm font-rubik text-gray-500 dark:text-gray-400">
              muhrizkialgipari@kayuaratech.com
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 mt-6">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    relative flex items-center gap-3 px-4 py-3 rounded-lg
                    font-rubik text-sm transition-colors group
                    ${pathname === item.href
                      ? `bg-[${colors.primary.light}] text-white dark:bg-[${colors.primary.dark}]`
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }
                  `}
                >
                  <div className="w-5 h-5 relative flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={`${item.label} icon`}
                      width={20}
                      height={20}
                      className={`transition-colors ${
                        pathname === item.href ? 'invert' : 'dark:invert'
                      }`}
                    />
                  </div>
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className={`
                      px-2 py-0.5 text-xs rounded-full
                      ${pathname === item.href
                        ? 'bg-white/20 text-white'
                        : 'bg-[#442781]/10 dark:bg-[#442781]/20 text-[#442781] dark:text-[#a992db]'
                      }
                    `}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* Storage Info - Slightly darker background */}
          <div className="p-4">
            <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-raleway text-sm font-medium text-gray-800 dark:text-white">
                  Storage
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  75%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#442781] dark:bg-[#61459C] rounded-full"
                  style={{ width: '75%' }}
                />
              </div>
              <p className="font-rubik text-xs text-gray-500 dark:text-gray-400 mt-2">
                7.5 GB of 10 GB used
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
