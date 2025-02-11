'use client';

import Image from 'next/image';
import { memo } from 'react';
import { useSidebar } from '../context/SidebarContext';
import { SidebarMenuItem } from './sidebar/SidebarMenuItem';
import { menuItems } from '../constants/menuItems';

// Memisahkan ProfileSection menjadi komponen terpisah
const ProfileSection = memo(() => (
  <div className="p-4 flex flex-col items-center text-center border-b border-gray-100 dark:border-gray-800/50 bg-white/50 dark:bg-gray-800/50">
    <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mb-2">
      <Image
        src="/images/avatar/avatar.png"
        alt="User Avatar"
        width={56}
        height={56}
        className="object-cover"
        priority
      />
    </div>
    <h3 className="font-raleway font-medium text-sm text-gray-800 dark:text-white mb-0.5">
      M. Rizki Algipari
    </h3>
    <p className="text-xs font-rubik text-gray-500 dark:text-gray-400 truncate max-w-[180px]">
      muhrizkialgipari@kayuaratech.com
    </p>
  </div>
));

ProfileSection.displayName = 'ProfileSection';

// Memisahkan Backdrop menjadi komponen terpisah
const Backdrop = memo(({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  isOpen && (
    <div
      className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-[2px] z-40 sm:hidden transform-gpu"
      onClick={onClick}
      aria-hidden="true"
    />
  )
));

Backdrop.displayName = 'Backdrop';

// Komponen Sidebar utama yang di-memo
const Sidebar = memo(function Sidebar() {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-60 pt-16
          bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
          border-r border-gray-100 dark:border-gray-800
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
        `}
        aria-label="Sidebar Navigation"
      >
        <div className="h-full flex flex-col">
          <ProfileSection />

          <nav className="flex-1 p-3 overflow-y-auto no-scrollbar" aria-label="Main Navigation">
            <div className="space-y-0.5">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label} {...item} />
              ))}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
});

export default Sidebar;
