'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

export default function TermsOfService() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen bg-slate-50"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-slate-900">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">1. Acceptance of Terms</h2>
              <p className="text-slate-600 mb-4">
                By accessing and using Edison Tech's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">2. Services Description</h2>
              <p className="text-slate-600 mb-4">
                Edison Tech provides web development and digital services including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Custom website development</li>
                <li>Web application development</li>
                <li>E-commerce solutions</li>
                <li>Technical consulting</li>
                <li>Performance optimization</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">3. Client Responsibilities</h2>
              <p className="text-slate-600 mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay all fees and charges in a timely manner</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">4. Intellectual Property</h2>
              <p className="text-slate-600 mb-4">
                All intellectual property rights in our services, including but not limited to software, designs, and content, remain the property of Edison Tech. Upon full payment, you will receive a license to use the deliverables for your business purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">5. Limitation of Liability</h2>
              <p className="text-slate-600 mb-4">
                Edison Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">6. Termination</h2>
              <p className="text-slate-600 mb-4">
                We reserve the right to terminate or suspend your access to our services at any time, without notice, for any reason, including breach of these Terms of Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">7. Contact Information</h2>
              <p className="text-slate-600 mb-4">
                For any questions regarding these Terms of Service, please contact us at:
              </p>
              <p className="text-slate-600">
                Email: legal@edisontech.com<br />
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