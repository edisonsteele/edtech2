'use client';

import { motion } from 'framer-motion';
import { scaleUp } from '@/lib/animations';

export default function FlatheadFlag() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={scaleUp}
      className="relative w-8 h-8"
    >
      {/* Flag background */}
      <div className="absolute inset-0 bg-blue-600 rounded-sm" />
      
      {/* Mountains */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2">
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-green-600 clip-mountain" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-green-700 clip-mountain-reverse" />
      </div>
      
      {/* Sun */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full" />
      
      {/* Lake */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-blue-400 rounded-b-sm" />
    </motion.div>
  );
} 