'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen bg-slate-50"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-slate-900">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">1. Information We Collect</h2>
              <p className="text-slate-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Name and contact information</li>
                <li>Company information</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">2. How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Provide and maintain our services</li>
                <li>Communicate with you about our services</li>
                <li>Improve our services and develop new features</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">3. Information Sharing</h2>
              <p className="text-slate-600 mb-4">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisors and consultants</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">4. Data Security</h2>
              <p className="text-slate-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">5. Your Rights</h2>
              <p className="text-slate-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">6. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-slate-600">
                Email: privacy@edisontech.com<br />
                Phone: (406) 555-0123<br />
                Address: Missoula, MT
              </p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 