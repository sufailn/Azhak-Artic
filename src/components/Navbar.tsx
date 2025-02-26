'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 glass py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="flex justify-between w-full md:w-auto">
        <Link href="/" className="text-xl md:text-2xl font-bold text-azhak-maroon">
          Azhak Artic
        </Link>
        <button
          className="md:hidden text-azhak-maroon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <div
        className={`flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 space-y-4 md:space-y-0 ${
          isOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        <Link href="#collections" className="hover:text-gold transition">
          Collections
        </Link>
        <Link href="#products" className="hover:text-gold transition">
          Products
        </Link>
        <Link href="#story" className="hover:text-gold transition">
          Our Story
        </Link>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 bg-azhak-maroon text-azhak-beige rounded-full"
        >
          Cart (0)
        </motion.button>
      </div>
    </motion.nav>
  );
}