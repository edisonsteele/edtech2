'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Owner",
    company: "Montana Outdoor Adventures",
    content: "Our website loads faster than any other outdoor gear site in Montana. The performance optimization for rural areas has been a game-changer for our business.",
    location: "Kalispell, MT"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Director of IT",
    company: "Flathead Health System",
    content: "The HIPAA compliance integration was seamless, and the Montana-specific optimizations ensure our patient portal works reliably across the state.",
    location: "Whitefish, MT"
  },
  {
    id: 3,
    name: "Lisa Thompson",
    role: "CEO",
    company: "Big Sky E-commerce",
    content: "Our online store's performance improved dramatically after switching to Edison Tech. The local hosting and CDN configuration made a huge difference.",
    location: "Missoula, MT"
  }
];

export default function LocalTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-white rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Local Success Stories</h2>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Testimonial Content */}
        <div className="text-center mb-8">
          <blockquote className="text-xl text-slate-600 mb-6">
            "{currentTestimonial.content}"
          </blockquote>
          <div>
            <div className="font-bold text-slate-900">{currentTestimonial.name}</div>
            <div className="text-slate-600">
              {currentTestimonial.role}, {currentTestimonial.company}
            </div>
            <div className="text-slate-500 text-sm mt-1">
              {currentTestimonial.location}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 