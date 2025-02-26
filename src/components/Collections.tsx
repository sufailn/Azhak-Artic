'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const collections = [
  { id: 1, name: 'Winter Glow', image: '/images/collection1.jpg', category: 'Winter' },
  { id: 2, name: 'Golden Hour', image: '/images/collection2.jpg', category: 'Summer' },
  { id: 3, name: 'Beige Bliss', image: '/images/collection3.jpg', category: 'Spring' },
  { id: 4, name: 'Maroon Muse', image: '/images/collection4.jpg', category: 'Fall' },
];

export default function Collections() {
  const [filter, setFilter] = useState('All');

  const filteredCollections = filter === 'All'
    ? collections
    : collections.filter((col) => col.category === filter);

  return (
    <section className="py-8 md:py-16 bg-azhak-maroon text-azhak-beige" id="collections">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gold mb-6 md:mb-12">
        Our Collections
      </h2>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 md:mb-8 px-4">
        {['All', 'Winter', 'Summer', 'Spring', 'Fall'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base ${
              filter === cat ? 'bg-gold text-charcoal' : 'bg-azhak-beige text-azhak-maroon'
            } hover:bg-gold hover:text-charcoal transition`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8">
        {filteredCollections.map((collection) => (
          <motion.div
            key={collection.id}
            whileHover={{ scale: 1.05, rotateX: 10 }}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={collection.image}
              alt={collection.name}
              className="w-full h-48 sm:h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azhak-maroon to-transparent opacity-70"></div>
            <p className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-gold text-sm sm:text-lg md:text-xl font-semibold">
              {collection.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}