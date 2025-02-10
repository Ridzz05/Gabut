'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSidebar } from '../context/SidebarContext';

const Navbar = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 font-raleway font-semibold text-lg text-gray-800">
              <div className="w-8 h-8 relative">
                <Image
                  src="/icons/logo.svg"
                  alt="Logo"
                  fill
                  className="text-gray-800"
                />
              </div>
              <span>K.A Tech</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex sm:space-x-8">
              <Link href="/" className="font-rubik text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/about" className="font-rubik text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/contact" className="font-rubik text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>

            {/* Toggle Button untuk Mobile */}
            <button
              onClick={toggle}
              className="block sm:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
              aria-label="Toggle Sidebar"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
