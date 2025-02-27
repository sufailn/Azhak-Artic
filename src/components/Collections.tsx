'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
};

export default function Collections() {
  const [filter, setFilter] = useState<string>('All');
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 4;

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Product[]) => setProducts(data))
      .catch((err) => {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products. Please try again later.');
      });
  }, []);

  const filteredProducts = filter === 'All'
    ? products
    : products.filter((product) => product.category === filter);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (error) {
    return <div className="text-center text-red-500 font-poppins py-8">{error}</div>;
  }

  return (
    <section className="py-8 md:py-16 bg-azhak-maroon text-azhak-beige" id="collections">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-center text-gold mb-6 md:mb-12">
        Our Collections
      </h2>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 md:mb-8 px-4">
        {['All', 'Winter', 'Summer', 'Spring', 'Fall'].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setCurrentPage(1); // Reset to first page on filter change
            }}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-poppins ${
              filter === cat ? 'bg-gold text-charcoal' : 'bg-azhak-beige text-azhak-maroon'
            } hover:bg-gold hover:text-charcoal transition`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8">
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05, rotateX: 10 }}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={400}
              className="w-full h-48 sm:h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azhak-maroon to-transparent opacity-70"></div>
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
              <p className="text-gold text-sm sm:text-lg md:text-xl font-poppins font-semibold">
                {product.name}
              </p>
              <p className="text-gold text-xs sm:text-sm font-poppins">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-full text-sm font-poppins ${
              currentPage === i + 1
                ? 'bg-gold text-charcoal'
                : 'bg-azhak-beige text-azhak-maroon hover:bg-gold hover:text-charcoal'
            } transition`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}