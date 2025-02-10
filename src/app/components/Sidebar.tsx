'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSidebar } from '../context/SidebarContext';

interface MenuItem {
  icon: string;
  label: string;
  href: string;
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
    href: '/tools'
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

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, toggle } = useSidebar();

  return (
    <>
      {/* Overlay untuk mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-400/20 backdrop-blur-sm z-40 sm:hidden"
          onClick={toggle}
        />
      )}
      
      <aside className={`
        fixed sm:fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 
        border-r border-gray-100
        bg-white/80 backdrop-blur-sm overflow-y-auto
        transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
      `}>
        <div className="p-4">
          {/* Profile Section - Centered */}
          <div className="mb-8 p-4 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-4 ring-2 ring-gray-100">
              <span className="text-2xl">👤</span>
            </div>
            <h2 className="font-raleway font-medium text-gray-800 text-lg mb-1">John Doe</h2>
            <p className="font-rubik text-sm text-gray-500">john@example.com</p>
          </div>

          {/* Navigation dengan animasi underline */}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group flex items-center gap-3 px-4 py-2.5 rounded-lg 
                    transition-colors relative overflow-hidden font-rubik
                    ${isActive 
                      ? 'bg-gray-100 text-gray-900 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  <div className="w-5 h-5 relative flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={`${item.label} icon`}
                      width={20}
                      height={20}
                      className={`transition-colors duration-200 ${
                        isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                      }`}
                    />
                  </div>
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Animasi garis bawah */}
                  <span className={`
                    absolute bottom-2 left-[2.5rem] right-4
                    h-[2px] bg-gray-200
                    transform origin-left scale-x-0
                    transition-transform duration-300 ease-out
                    group-hover:scale-x-100
                    ${isActive ? 'bg-gray-400' : 'bg-gray-200'}
                  `} />
                </Link>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="p-4 rounded-lg bg-gray-50 mb-4">
              <h3 className="font-raleway text-sm font-medium text-gray-800 mb-2">Storage</h3>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-gray-400 rounded-full" />
              </div>
              <p className="font-rubik text-xs text-gray-500 mt-2">
                7.5 GB of 10 GB used
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
