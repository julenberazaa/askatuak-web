'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ParallaxHeroProps {
  src: string;
  alt: string;
  children: ReactNode;
  height?: string;
  overlayOpacity?: number;
}

export default function ParallaxHero({
  src,
  alt,
  children,
  height = 'h-screen',
  overlayOpacity = 0.5,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax effect: image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={ref} className={`relative ${height} overflow-hidden`}>
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-askatuak-blue-900/60 via-askatuak-blue-900/40 to-askatuak-blue-900/80"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}
