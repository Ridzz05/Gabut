'use client';

import { memo } from 'react';

interface ArrowIconProps {
  isOpen: boolean;
}

export const ArrowIcon = memo(function ArrowIcon({ isOpen }: ArrowIconProps) {
  return (
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
}); 