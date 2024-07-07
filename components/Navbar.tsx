"use client"
import React, { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const menuItems = [
    { name: 'About', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Experience', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <nav className="bg-black text-white z-30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold flex-shrink-0">Sonu</a>
            <div className="hidden md:flex space-x-4 ml-10">
              {menuItems.map(item => (
                <a key={item.name} href={item.href} className="hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://www.linkedin.com/in/uniquesonu" target="_blank" className="text-gray-300 hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              <Linkedin className="inline-block h-4 w-4 mr-1" /> LinkedIn
            </a>
            <a href="https://github.com/uniquesonu/" target="_blank" className="outline hover:bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium">
              <Github className="inline-block h-4 w-4 mr-1" /> GitHub
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle main menu</span>
            </button>
          </div>
        </div>
      </div>
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map(item => (
            <a key={item.name} href={item.href} className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              {item.name}
            </a>
          ))}
          <a href="https://www.linkedin.com/in/uniquesonu" target="_blank" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            <span className="flex items-center gap-2">
              <Linkedin className="inline-block h-4 w-4" /> LinkedIn
            </span>
          </a>
          <a href="https://github.com/uniquesonu/" target="_blank" className="bg-purple-600 hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium">
            <span className="flex items-center gap-2">
              <Github className="inline-block h-4 w-4" /> GitHub
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;