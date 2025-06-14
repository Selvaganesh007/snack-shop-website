"use client"; // Next.js 13 App Router

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-xl font-bold text-gray-800 dark:text-white">
              Anand Sweets
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Home</a>
            <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">About</a>
            <a href="#products" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Products</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">About</a>
            <a href="#products" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">Products</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
