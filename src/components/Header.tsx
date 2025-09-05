import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
                thewriter<span className="text-accent-blue">.</span>
              </h1>
            </div>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <nav 
        className={`fixed top-16 right-0 z-50 w-80 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <ul className="space-y-6">
            <li>
              <a 
                href="#" 
                className="block text-lg font-medium text-neutral-900 hover:text-accent-blue transition-colors duration-200 focus:outline-none focus:text-accent-blue"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block text-lg font-medium text-neutral-900 hover:text-accent-blue transition-colors duration-200 focus:outline-none focus:text-accent-blue"
                onClick={toggleMenu}
              >
                Travel
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block text-lg font-medium text-neutral-900 hover:text-accent-blue transition-colors duration-200 focus:outline-none focus:text-accent-blue"
                onClick={toggleMenu}
              >
                Design
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block text-lg font-medium text-neutral-900 hover:text-accent-blue transition-colors duration-200 focus:outline-none focus:text-accent-blue"
                onClick={toggleMenu}
              >
                Lifestyle
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block text-lg font-medium text-neutral-900 hover:text-accent-blue transition-colors duration-200 focus:outline-none focus:text-accent-blue"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block text-lg font-medium text-neutral-900 hover:text-accent-blue transition-colors duration-200 focus:outline-none focus:text-accent-blue"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;