import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edison Tech - Montana Web Development",
  description: "High-performance web development services for Montana businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <span className="font-bold text-xl text-gray-800">Edison Tech</span>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
                <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Portfolio
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Services
                </Link>
                <Link href="/compliance-edge" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Compliance Edge
                </Link>
                <Link href="/tools" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Tools
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-white">Edison Tech</h3>
                <p className="text-gray-400">
                  High-performance web development services for Montana businesses
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/compliance-edge" className="text-gray-400 hover:text-white transition-colors">
                      Compliance Edge
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Missoula, MT</li>
                  <li>contact@edisontech.com</li>
                  <li>(406) 555-0123</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              &copy; {new Date().getFullYear()} Edison Tech. All rights reserved.
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
