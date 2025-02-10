import Link from 'next/link';
import { colors } from '../constants/colors';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  icon,
  href,
  external,
  disabled,
  onClick,
  ...props 
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center 
    font-rubik rounded-lg 
    transition-all duration-200 ease-in-out
    transform hover:scale-[1.02] active:scale-[0.98]
    hover:-translate-y-0.5 active:translate-y-0
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  const variants = {
    primary: `
      bg-[${colors.primary.light}] text-white 
      hover:bg-[${colors.secondary.light}] 
      dark:bg-[${colors.primary.dark}] 
      dark:hover:bg-[${colors.secondary.dark}]
      shadow-sm hover:shadow-md
      focus:ring-[${colors.primary.light}] dark:focus:ring-[${colors.primary.dark}]
      disabled:opacity-50 disabled:cursor-not-allowed
      disabled:hover:scale-100 disabled:hover:translate-y-0
      disabled:hover:shadow-sm
    `,
    secondary: `
      bg-gray-100 text-gray-600 
      hover:bg-gray-200 
      dark:bg-gray-800 dark:text-gray-300 
      dark:hover:bg-gray-700
      focus:ring-gray-400 dark:focus:ring-gray-500
      disabled:opacity-50 disabled:cursor-not-allowed
      disabled:hover:scale-100 disabled:hover:translate-y-0
    `,
    outline: `
      border-2 
      border-[${colors.primary.light}] text-[${colors.primary.light}]
      hover:bg-[${colors.primary.light}]/10
      dark:border-[${colors.primary.dark}] dark:text-[${colors.primary.dark}]
      dark:hover:bg-[${colors.primary.dark}]/10
      focus:ring-[${colors.primary.light}] dark:focus:ring-[${colors.primary.dark}]
      disabled:opacity-50 disabled:cursor-not-allowed
      disabled:hover:scale-100 disabled:hover:translate-y-0
      group
    `
  };

  const iconStyles = icon ? `
    gap-2 
    [&>span]:transition-transform 
    [&>span]:duration-200 
    hover:[&>span]:translate-x-0.5
    group-hover:[&>span]:translate-x-0.5
  ` : '';

  const combinedClassName = `
    ${baseStyles} 
    ${sizes[size]} 
    ${variants[variant]} 
    ${iconStyles}
    ${className}
  `;

  if (href) {
    const anchorProps = {
      className: combinedClassName,
      href,
      ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
      ...props
    };

    return external ? (
      <a {...anchorProps}>
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </a>
    ) : (
      <Link {...anchorProps}>
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
} 