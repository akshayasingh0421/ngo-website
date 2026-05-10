"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-blue-500" />
          <Link href="/" className="text-xl font-bold tracking-tight text-slate-900" onClick={() => setIsOpen(false)}>
            Hope<span className="text-blue-500">Foundation</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-500 transition-colors">Home</Link>
          <Link href="/programs" className="text-sm font-medium text-slate-600 hover:text-blue-500 transition-colors">Programs</Link>
          <Link href="/impact" className="text-sm font-medium text-slate-600 hover:text-blue-500 transition-colors">Impact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/donate" className="rounded-full bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-all hover:scale-105 active:scale-95">
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 rounded-md"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-100 bg-white"
          >
            <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
              <Link href="/" className="block text-base font-medium text-slate-800 hover:text-blue-500 p-2 rounded-md hover:bg-slate-50" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/programs" className="block text-base font-medium text-slate-800 hover:text-blue-500 p-2 rounded-md hover:bg-slate-50" onClick={() => setIsOpen(false)}>Programs</Link>
              <Link href="/impact" className="block text-base font-medium text-slate-800 hover:text-blue-500 p-2 rounded-md hover:bg-slate-50" onClick={() => setIsOpen(false)}>Impact</Link>
              <Link href="/donate" className="block text-base font-bold text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-xl text-center mt-4 transition-colors" onClick={() => setIsOpen(false)}>
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
