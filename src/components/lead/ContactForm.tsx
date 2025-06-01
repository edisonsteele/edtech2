'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-2xl mx-auto"
    >
      <motion.h2 
        variants={slideUp}
        className="text-3xl font-bold text-center mb-8 text-gray-900"
      >
        Get in Touch
      </motion.h2>
      
      <motion.form 
        variants={fadeIn}
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={slideUp}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your name"
              required
            />
          </motion.div>
          
          <motion.div variants={slideUp}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
              required
            />
          </motion.div>
        </div>

        <motion.div variants={slideUp}>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="How can we help?"
            required
          />
        </motion.div>

        <motion.div variants={slideUp}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Tell us about your project..."
            required
          />
        </motion.div>

        <motion.div 
          variants={slideUp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
} 