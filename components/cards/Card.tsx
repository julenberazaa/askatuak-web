import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

type CardVariant = 'small' | 'medium' | 'large' | 'wide' | 'tall' | 'featured';

interface CardProps {
  variant?: CardVariant;
  title: string;
  description?: string;
  image?: string;
  href?: string;
  icon?: ReactNode;
  overlay?: boolean;
  children?: ReactNode;
  className?: string;
}

const variantClasses: Record<CardVariant, string> = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-1 row-span-2',
  large: 'col-span-1 sm:col-span-2 row-span-2',
  wide: 'col-span-1 sm:col-span-2 row-span-1',
  tall: 'col-span-1 row-span-2 lg:row-span-3',
  featured: 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-2',
};

export default function Card({
  variant = 'medium',
  title,
  description,
  image,
  href,
  icon,
  overlay = true,
  children,
  className = '',
}: CardProps) {
  const content = (
    <div
      className={`
        ${variantClasses[variant]}
        ${className}
        relative overflow-hidden rounded-xl
        bg-askatuak-blue-900
        group cursor-pointer
        transition-all duration-300
        hover:shadow-2xl hover:scale-[1.02]
      `}
    >
      {/* Background Image */}
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      )}

      {/* Overlay Gradient */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-askatuak-blue-900 via-askatuak-blue-900/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
      )}

      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
        {icon && <div className="mb-3">{icon}</div>}
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 leading-tight">
          {title}
        </h3>
        {description && (
          <p className="text-white/80 text-sm line-clamp-2">
            {description}
          </p>
        )}
        {children}
      </div>

      {/* Hover Arrow */}
      {href && (
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block">{content}</Link>;
  }

  return content;
}
