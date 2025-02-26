'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-screen overflow-hidden" id="hero">
      {/* Video with Fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-fashion.mp4" type="video/mp4" />
        {/* Fallback Image if Video Fails */}
       x <Image
          src="/images/hero-poster.jpg"
          alt="Hero Poster"
          fill
          className="object-cover"
          priority
        />
      </video>
      <div className="absolute inset-0  flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gold"
        >
          Welcome to Azhak Artic
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl text-azhak-beige mt-4"
        >
          Where Fashion Meets the Future
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#FFD700', color: '#712935' }}
          className="mt-6 px-4 py-2 sm:px-6 sm:py-3 glass text-gold rounded-full font-semibold text-sm sm:text-base"
        >
          Explore Now
        </motion.button>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 right-4 w-32 sm:w-40 md:w-48 lg:w-60"
      >
        {/* <Image
          src="/images/product-360.png"
          alt="Floating Product"
          width={250}
          height={250}
          className="hover:rotate-12 transition-transform"
        /> */}
      </motion.div>
    </section>
  );
}