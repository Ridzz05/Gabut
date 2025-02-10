'use client';

import Image from 'next/image';
import { useSidebar } from '../context/SidebarContext';
import { SidebarMenuItem } from './sidebar/SidebarMenuItem';
import { menuItems } from '../constants/menuItems';

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
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <>
      {/* Backdrop dengan lazy loading */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar dengan aria labels untuk aksesibilitas */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64 pt-16
          bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
          border-r border-gray-100 dark:border-gray-800/50
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
        `}
        aria-label="Sidebar Navigation"
      >
        <div className="h-full flex flex-col">
          {/* Profile Section */}
          <div className="p-6 flex flex-col items-center text-center border-b border-gray-100 dark:border-gray-800/50 bg-white/50 dark:bg-gray-800/50">
            <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mb-4">
              <Image
                src="/images/avatar/avatar.png"
                alt="User Avatar"
                width={80}
                height={80}
                className="object-cover"
                priority
              />
            </div>
            <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-1">
              M. Rizki Algipari
            </h3>
            <p className="text-sm font-rubik text-gray-500 dark:text-gray-400">
              muhrizkialgipari@kayuaratech.com
            </p>
          </div>

          {/* Navigation dengan komponen terpisah */}
          <nav className="flex-1 px-4 mt-6" aria-label="Main Navigation">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label} {...item} />
              ))}
            </div>
          </nav>

          {/* Storage Section dengan aria-label */}
          <div className="p-4">
            <div 
              className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50"
              aria-label="Storage Information"
            >
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
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
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
