'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProductShowcase() {
  return (
    <section className="py-8 md:py-16 bg-azhak-beige flex flex-col items-center" id="products">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-azhak-maroon mb-6 md:mb-12">
        Featured Product
      </h2>
      <motion.div
        
        
        className="w-48 sm:w-64 md:w-80"
      >
        <Image
          src="/images/product-360.png"
          alt="360 Product"
          width={500}
          height={350}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
      <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-4">
        <button className="px-3 py-1 sm:px-6 sm:py-2 bg-azhak-maroon text-azhak-beige rounded-full hover:bg-gold hover:text-charcoal transition text-sm sm:text-base">
          Silk
        </button>
        <button className="px-3 py-1 sm:px-6 sm:py-2 bg-gold text-charcoal rounded-full hover:bg-azhak-maroon hover:text-azhak-beige transition text-sm sm:text-base">
          Velvet
        </button>
      </div>
      <p className="mt-4 text-charcoal text-sm sm:text-base">Size: S | M | L | XL</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-azhak-maroon text-azhak-beige rounded-full font-semibold text-sm sm:text-base"
      >
        Add to Cart
      </motion.button>
    </section>
  );
}