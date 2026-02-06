'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ParallaxBannerProps {
  src: string;
  alt: string;
  children: ReactNode;
  height?: string;
}

export default function ParallaxBanner({
  src,
  alt,
  children,
  height = 'min-h-[500px]',
}: ParallaxBannerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax: background moves at different rate
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className={`relative ${height} overflow-hidden`}>
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-askatuak-blue-900/85" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        {children}
      </div>
    </section>
  );
}
