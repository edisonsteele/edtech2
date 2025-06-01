'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import FlatheadFlag from './FlatheadFlag';
import { fadeIn, slideUp } from '@/lib/animations';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Compliance Edge', href: '/compliance-edge' },
  { name: 'Tools', href: '/tools' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-white shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Flag */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <FlatheadFlag />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Edison Tech</span>
                <span className="text-sm text-indigo-600">Flathead Valley</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                variants={slideUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-indigo-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
} 