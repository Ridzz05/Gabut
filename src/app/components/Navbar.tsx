'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSidebar } from '../context/SidebarContext';
import ThemeToggle from './ThemeToggle';
import { ArrowIcon } from './Sidebar';

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="relative w-10 h-10">
      <Image 
        src="/icons/logo.svg" 
        alt="K.A Tech Logo" 
        fill
        className="object-contain"
        priority
      />
    </div>
    <div className="flex items-center gap-1">
      <span className="font-raleway font-bold text-xl text-[#442781]">
        K.A
      </span>
      <span className="font-raleway font-bold text-xl text-gray-800 dark:text-white">
        Tech
      </span>
    </div>
  </div>
);

const navLinks = [
  { 
    label: 'Home', 
    href: '/', 
    icon: '/icons/home-nav.svg'
  },
  { 
    label: 'Github', 
    href: 'https://github.com/yourusername', 
    icon: '/icons/github-nav.svg',
    external: true 
  },
  { 
    label: 'Instagram', 
    href: 'https://instagram.com/yourusername', 
    icon: '/icons/instagram-nav.svg',
    external: true 
  },
  { 
    label: 'Portfolio', 
    href: '/portfolio', 
    icon: '/icons/portfolio-nav.svg'
  }
];

const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/50 z-50">
      <div className="h-full flex items-center justify-between px-4 max-w-7xl mx-auto">
        {/* Logo as Link */}
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group relative flex items-center gap-2 font-rubik text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              <Image
                src={link.icon}
                alt=""
                width={20}
                height={20}
                className="w-5 h-5 transition-transform group-hover:scale-110 dark:invert dark:opacity-75 dark:group-hover:opacity-100"
              />
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#442781] dark:bg-[#61459C] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Ganti theme toggle button dengan komponen ThemeToggle */}
          <ThemeToggle />

          {/* Menu Button with Arrow - Only show on mobile */}
          <button
            onClick={toggleSidebar}
            className="sm:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle Menu"
          >
            <ArrowIcon isOpen={isOpen} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
