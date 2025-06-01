'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, scaleUp, hoverScale, tapScale } from '@/lib/animations';
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

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Montana Outdoor Gear",
    category: "E-commerce",
    image: "/portfolio/montana-outdoor.jpg",
    description: "A high-performance e-commerce platform for outdoor gear, built with Next.js and Shopify.",
    technologies: ["Next.js", "Shopify", "Tailwind CSS", "TypeScript"],
    results: ["40% increase in conversion rate", "60% reduction in page load time", "25% growth in mobile sales"]
  },
  {
    id: 2,
    title: "Healthcare Portal",
    category: "Healthcare",
    image: "/portfolio/healthcare-portal.jpg",
    description: "HIPAA-compliant patient portal with real-time appointment scheduling and secure messaging.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    results: ["99.9% uptime", "50% reduction in appointment no-shows", "HIPAA compliance achieved"]
  },
  {
    id: 3,
    title: "Financial Dashboard",
    category: "Finance",
    image: "/portfolio/financial-dashboard.jpg",
    description: "Real-time financial analytics dashboard with automated reporting and compliance monitoring.",
    technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
    results: ["30% faster reporting", "100% audit compliance", "75% reduction in manual work"]
  }
];

export default function PortfolioGrid() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {portfolioItems.map((item, i) => (
          <motion.div
            key={i}
            variants={scaleUp}
            whileHover={hoverScale}
            whileTap={tapScale}
            onClick={() => setSelectedItem(item)}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="aspect-video bg-gradient-to-br from-indigo-500 to-blue-600 relative">
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                {item.title}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <CaseStudyModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </>
  );
} 