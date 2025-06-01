'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';

export default function DevHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-20 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn} className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Montana&apos;s Premier Web Development Agency
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              We build high-performance, scalable web applications that help Montana businesses thrive in the digital age.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium"
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={scaleUp} className="grid grid-cols-2 gap-4">
            {[
              { title: 'Next.js', color: 'from-blue-500 to-blue-600' },
              { title: 'React', color: 'from-cyan-500 to-cyan-600' },
              { title: 'TypeScript', color: 'from-indigo-500 to-indigo-600' },
              { title: 'Tailwind CSS', color: 'from-teal-500 to-teal-600' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${tech.color} p-6 rounded-xl text-white`}
              >
                <h3 className="text-xl font-bold">{tech.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 