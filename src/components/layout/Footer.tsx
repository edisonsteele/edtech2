import { MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-indigo-400 mr-2" />
              <span className="font-bold text-lg text-white">Edison Tech</span>
            </div>
            <p className="mb-6">
              High-performance websites with built-in compliance for Montana businesses
            </p>
            <div className="flex space-x-4">
              {[...Array(3)].map((_, i) => (
                <a key={i} href="#" className="bg-slate-800 p-2 rounded-full">
                  <div className="bg-slate-200 border-2 border-dashed rounded-xl w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Services', href: '/services' },
                { name: 'Compliance Edge', href: '/compliance-edge' },
                { name: 'Montana Advantage', href: '/montana' },
                { name: 'Technical Tools', href: '/tools' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Compliance Certifications', href: '/compliance' },
                { name: 'Accessibility Statement', href: '/accessibility' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <address className="not-italic space-y-3">
              <p>Flathead Valley, Montana</p>
              <p>
                <a href="tel:+14065551234" className="hover:text-white">
                  (406) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:contact@edisontech.com" className="hover:text-white">
                  contact@edisontech.com
                </a>
              </p>
            </address>
            <div className="mt-6 bg-indigo-900/50 rounded-lg p-4">
              <p className="text-sm">
                <span className="font-medium">Montana Business Hours:</span><br />
                9AM-5PM MT, Monday-Friday
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <MapPin className="h-4 w-4 text-indigo-400 mr-1" />
            <span>Built in Flathead Valley, Montana</span>
          </div>
          <div className="flex items-center">
            <span className="mr-4">Certifications:</span>
            <div className="flex space-x-3">
              {['SOC 2', 'PCI-DSS', 'MT Privacy'].map((cert) => (
                <span 
                  key={cert} 
                  className="bg-slate-800 px-3 py-1 rounded-full text-xs"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            &copy; {currentYear} Edison Tech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 