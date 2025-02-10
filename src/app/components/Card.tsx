interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-white dark:bg-gray-800 
      rounded-xl shadow-sm 
      border border-gray-100 dark:border-gray-700 
      p-6 hover:shadow-md transition-shadow
      ${className}
    `}>
      {children}
    </div>
  );
} 