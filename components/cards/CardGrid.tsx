import { ReactNode } from 'react';

interface CardGridProps {
  children: ReactNode;
  className?: string;
}

export default function CardGrid({ children, className = '' }: CardGridProps) {
  return (
    <div
      className={`
        grid gap-4
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        auto-rows-[200px]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
