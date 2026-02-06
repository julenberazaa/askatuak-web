'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  title: string;
  description?: string;
  image: string;
  href: string;
  index?: number;
}

export default function AnimatedCard({
  title,
  description,
  image,
  href,
  index = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
    >
      <Link href={href} className="block group">
        <div className="relative h-[280px] rounded-xl overflow-hidden bg-askatuak-blue-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          {/* Image */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-askatuak-blue-900 via-askatuak-blue-900/60 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
              {title}
            </h3>
            {description && (
              <p className="text-slate-300 text-sm line-clamp-2">
                {description}
              </p>
            )}
          </div>

          {/* Hover Arrow */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white/20">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
