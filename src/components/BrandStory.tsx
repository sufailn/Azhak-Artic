'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function BrandStory() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <section className="py-8 md:py-16 bg-azhak-maroon text-azhak-beige" id="story">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gold mb-6 md:mb-12">
        Our Journey
      </h2>
      <div className="max-w-3xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <motion.div style={{ opacity, scale }} className="flex justify-center">
          <Image
            src="/images/team.jpg"
            alt="Team"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
          />
        </motion.div>
        <div className="flex flex-col justify-center">
          <p className="text-sm sm:text-lg mb-4 md:mb-6">
            Azhak Artic was born in 2023 with a vision to fuse futuristic design with timeless elegance. Our team of innovators and artisans crafts each piece to inspire and empower.
          </p>
          <p className="text-sm sm:text-lg mb-4 md:mb-6">
            Sustainability is at our core. From eco-friendly materials to ethical production, we’re committed to a greener future.
          </p>
          {/* <Image
            src="/images/sustainability.jpg"
            alt="Sustainability"
            width={300}
            height={200}
            className="rounded-lg mt-4 w-full max-w-[250px] sm:max-w-[300px]"
          /> */}
        </div>
      </div>
    </section>
  );
}