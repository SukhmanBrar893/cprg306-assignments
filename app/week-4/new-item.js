// /app/week-4/new-item.js
'use client';

import { useState } from 'react';

export default function NewItem() {
  // Initialize quantity state
  const [quantity, setQuantity] = useState(1);

  // Increment function
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Decrement function
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <p className="text-lg font-semibold">Quantity: {quantity}</p>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
