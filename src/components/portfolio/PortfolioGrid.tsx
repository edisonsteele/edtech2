'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import CaseStudyModal from './CaseStudyModal';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  results: string[];
}

interface Props {
  items: PortfolioItem[];
}

export default function PortfolioGrid({ items }: Props) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={fadeIn}
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          onClick={() => setSelectedItem(item)}
        >
          <div className="relative h-48">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-sm font-medium text-blue-400">{item.category}</span>
              <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-600 line-clamp-2">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
              {item.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                  +{item.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      <CaseStudyModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        caseStudy={selectedItem || {
          title: '',
          description: '',
          image: '',
          technologies: [],
          results: []
        }}
      />
    </motion.div>
  );
} 