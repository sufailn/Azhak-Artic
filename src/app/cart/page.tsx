'use client';

import { useCartStore } from '@/lib/store';
import Image from 'next/image';

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotal = useCartStore((state) => state.getTotal);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-azhak-beige text-charcoal flex items-center justify-center font-poppins">
        <p className="text-2xl font-bold text-azhak-maroon">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-azhak-beige text-charcoal py-8 px-4 md:px-8 font-poppins">
      <h1 className="text-3xl md:text-4xl font-bold text-azhak-maroon mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center bg-azhak-maroon bg-opacity-10 p-4 rounded-lg shadow-lg"
          >
            <Image
              src="/images/product-360.png" // Use a placeholder; replace with actual images
              alt={item.name}
              width={100}
              height={100}
              className="rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-azhak-maroon">{item.name}</h2>
              <p className="text-charcoal">${item.price.toFixed(2)}</p>
              <div className="mt-2 flex items-center space-x-2">
                <label className="text-charcoal">Qty:</label>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  className="w-16 p-1 border rounded bg-azhak-beige text-azhak-maroon"
                />
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-4 md:mt-0 md:ml-4 px-4 py-2 bg-gold text-charcoal rounded-full hover:bg-azhak-maroon hover:text-azhak-beige transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <p className="text-xl font-bold text-azhak-maroon">
          Total: ${getTotal().toFixed(2)}
        </p>
        <button
          onClick={clearCart}
          className="mt-4 px-6 py-2 bg-azhak-maroon text-azhak-beige rounded-full hover:bg-gold hover:text-charcoal transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}