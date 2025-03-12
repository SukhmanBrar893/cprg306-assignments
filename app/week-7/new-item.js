"use client";

import { useState } from "react";

export default function NewItem({ handleAdditem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    let item = { name, category, quantity };
    handleAdditem(item);
    setCategory("Produce");
    setName("");
    setQuantity(1);
  };

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="border-2 border-gray-900 bg-gray-100 p-4 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <label className="flex flex-col text-gray-700 font-medium">
          Name:
          <input
            className="mt-1 border-2 p-2 bg-white focus:ring-2 focus:ring-blue-500 border-gray-900 rounded-lg"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="flex flex-col text-gray-700 font-medium">
          Quantity: {quantity}
          <div className="flex space-x-2 mt-1">
            <button
              type="button"
              className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition $ {
                quantity >= 20 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={increment}
            >
              +
            </button>
            <button
              type="button"
              className={`px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition $ {
                quantity === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={decrement}
            >
              -
            </button>
          </div>
        </label>

        <label className="flex flex-col text-gray-700 font-medium">
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 border-2 p-2 bg-white focus:ring-2 focus:ring-blue-500 border-gray-900 rounded-lg"
          >
            {[
              "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", 
              "Dry Goods", "Beverages", "Snacks", "Household", "Other"
            ].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          type="submit"
        >
          Submit 
        </button>
      </form>
    </div>
  );
}