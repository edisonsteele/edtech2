'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Shield, MapPin, Zap } from 'lucide-react';
import { fadeIn, slideUp, staggerContainer, hoverScale, tapScale, scaleUp } from '@/lib/animations';

export default function DevHero() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-28 flex flex-col lg:flex-row">
        {/* Value Proposition */}
        <motion.div 
          className="lg:w-1/2"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            variants={slideUp}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 rounded-full mb-6"
          >
            <Lightbulb className="h-5 w-5 mr-2" />
            <span>Web Development Excellence</span>
          </motion.div>
          
          <motion.h1 
            variants={slideUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="block">High-Performance Websites</span>
            <span className="text-indigo-300">With Built-In Compliance</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl text-slate-200 mb-8 max-w-lg"
          >
            Websites that convert, perform, and meet regulations - 
            optimized for Montana businesses.
          </motion.p>
          
          <motion.div 
            variants={slideUp}
            className="flex flex-wrap gap-4"
          >
            <motion.a 
              href="/portfolio" 
              className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-medium transition-colors"
              whileHover={hoverScale}
              whileTap={tapScale}
            >
              View Portfolio
            </motion.a>
            <motion.a 
              href="/tools" 
              className="bg-transparent border-2 border-indigo-400 text-indigo-100 hover:bg-indigo-900/50 px-8 py-3 rounded-lg font-medium transition-colors"
              whileHover={hoverScale}
              whileTap={tapScale}
            >
              Get Technical Audit
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Tech Showcase */}
        <motion.div 
          className="lg:w-1/2 mt-16 lg:mt-0"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-2 gap-6">
            {[
              { 
                icon: <Rocket className="w-8 h-8" />, 
                title: "Next.js Performance", 
                bg: "from-indigo-500 to-blue-600" 
              },
              { 
                icon: <Shield className="w-8 h-8" />, 
                title: "Compliance Ready", 
                bg: "from-emerald-500 to-teal-600" 
              },
              { 
                icon: <MapPin className="w-8 h-8" />, 
                title: "Montana Optimized", 
                bg: "from-amber-500 to-orange-600" 
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Vercel Deployment", 
                bg: "from-purple-500 to-pink-600" 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={scaleUp}
                whileHover={hoverScale}
                whileTap={tapScale}
                className={`bg-gradient-to-br ${item.bg} rounded-2xl p-6 aspect-square flex flex-col justify-center items-center text-center shadow-xl text-white`}
              >
                <div className="mb-4">{item.icon}</div>
                <div className="font-bold text-lg">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 