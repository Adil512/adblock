// app/layout.js
// app/layout.js
"use client";
import { useState } from 'react';
import './globals.css'; // Add this import!

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
    { title: 'Privacy', path: '/privacy' }
  ];

  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-gray-800">AdBlock</span>
              </a>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center space-x-8">
                {menuItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
                {/* Install Button */}
                <a
                  href="#download"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Install Now
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <div 
              className={`md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
              }`}
            >
              <nav className="flex flex-col py-4">
                {menuItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
                {/* Mobile Install Button */}
                <div className="px-4 pt-4">
                  <a
                    href="#download"
                    className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Install Now
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content with padding for fixed header */}
        <main className="max-w-6xl mx-auto px-4 py-8 pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-2">About Us</h3>
                <p className="text-gray-300">A brief description of your website or company.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                  <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Contact</h3>
                <p className="text-gray-300">Email: info@example.com</p>
                <p className="text-gray-300">Phone: (123) 456-7890</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}