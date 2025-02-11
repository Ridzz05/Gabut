'use client';

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface SidebarMenuItemProps {
  icon: string;
  label: string;
  href: string;
  badge?: string;
}

export const SidebarMenuItem = memo(function SidebarMenuItem({ 
  icon, 
  label, 
  href, 
  badge 
}: SidebarMenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg
        font-rubik text-sm transition-all
        hover:bg-gray-100 dark:hover:bg-gray-800
        ${isActive 
          ? 'bg-[#442781]/10 dark:bg-[#442781]/20 text-[#442781] dark:text-[#61459C] font-medium' 
          : 'text-gray-600 dark:text-gray-300'
        }
      `}
    >
      <div className="relative w-4 h-4 flex-shrink-0">
        <Image
          src={icon}
          alt=""
          fill
          className={`${isActive ? 'opacity-100' : 'opacity-70'} dark:invert`}
        />
      </div>
      
      <span className="flex-1 truncate">{label}</span>
      
      {badge && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-[#442781] dark:bg-[#61459C] text-white"
        >
          {badge}
        </motion.span>
      )}
    </Link>
  );
}); 