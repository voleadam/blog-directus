import React from 'react';
import { Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              thewriter<span className="text-accent-blue">.</span>
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              A digital magazine exploring the intersection of design, travel, and lifestyle through thoughtful storytelling.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Travel</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Design</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Lifestyle</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Privacy</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Stay Connected
            </h4>
            <p className="text-neutral-400 text-sm mb-4">
              Subscribe to our weekly newsletter for the latest articles and insights.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2025 thewriter. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">Terms</a>
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">Privacy</a>
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;