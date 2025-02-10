import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { colors } from '../../constants/colors';

interface MenuItemProps {
  icon: string;
  label: string;
  href: string;
  badge?: string;
}

export function SidebarMenuItem({ icon, label, href, badge }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        relative flex items-center gap-3 px-4 py-3 rounded-lg
        font-rubik text-sm transition-colors group
        ${isActive
          ? `bg-[${colors.primary.light}] text-white dark:bg-[${colors.primary.dark}]`
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
        }
      `}
    >
      <div className="w-5 h-5 relative flex items-center justify-center">
        <Image
          src={icon}
          alt={`${label} icon`}
          width={20}
          height={20}
          className={`transition-colors ${isActive ? 'invert' : 'dark:invert'}`}
        />
      </div>
      <span className="flex-1">{label}</span>
      {badge && (
        <span className={`
          px-2 py-0.5 text-xs rounded-full
          ${isActive
            ? 'bg-white/20 text-white'
            : 'bg-[#442781]/10 dark:bg-[#442781]/20 text-[#442781] dark:text-[#a992db]'
          }
        `}>
          {badge}
        </span>
      )}
    </Link>
  );
} 