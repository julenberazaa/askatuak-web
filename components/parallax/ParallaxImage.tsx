'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  overlay?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  overlay = true,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      )}
    </div>
  );
}
