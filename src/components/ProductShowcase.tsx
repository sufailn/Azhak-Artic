'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCartStore } from '@/lib/store';
import Image from 'next/image';

export default function ProductShowcase() {
  const [material, setMaterial] = useState('Silk');
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: `Featured Product (${material})`,
      price: 99.99,
      quantity: 1,
    });
  };

  return (
    <section className="py-8 md:py-16 bg-azhak-beige flex flex-col items-center" id="products">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-azhak-maroon mb-6 md:mb-12">
        Featured Product
      </h2>
      <div className="w-full max-w-md">
        <Image
          src="/images/product-360.png"
          alt="Featured Product"
          width={350}
          height={350}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-4">
        <button
          onClick={() => setMaterial('Silk')}
          className={`px-3 py-1 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base font-poppins ${
            material === 'Silk' ? 'bg-azhak-maroon text-azhak-beige' : 'bg-gold text-charcoal'
          } hover:bg-azhak-maroon hover:text-azhak-beige transition`}
        >
          Silk
        </button>
        <button
          onClick={() => setMaterial('Velvet')}
          className={`px-3 py-1 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base font-poppins ${
            material === 'Velvet' ? 'bg-azhak-maroon text-azhak-beige' : 'bg-gold text-charcoal'
          } hover:bg-azhak-maroon hover:text-azhak-beige transition`}
        >
          Velvet
        </button>
      </div>
      <p className="mt-4 text-charcoal text-sm sm:text-base font-poppins">Size: S | M | L | XL</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={handleAddToCart}
        className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-azhak-maroon text-azhak-beige rounded-full font-poppins font-semibold text-sm sm:text-base"
      >
        Add to Cart
      </motion.button>
    </section>
  );
}