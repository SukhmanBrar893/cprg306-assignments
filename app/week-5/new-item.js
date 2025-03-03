"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    let item = {
      name: name,
      category: category,
      quantity: quantity,
    };
    alert(JSON.stringify(item));
    console.log(item);
    setCategory("Produce");
    setName("");
    setQuantity(1);
  };

  const increment = () => {
    if (quantity >= 20) return;
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity <= 0) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto text-white">
      <h2 className="text-xl font-bold mb-4 text-center">Add New Item</h2>
      <form className="flex flex-col gap-4">
        <label className="flex flex-col">
          Name:
          <input
            className="mt-1 p-2 rounded-lg border border-white bg-white text-gray-900"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="flex flex-col">
          Quantity: {quantity}
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              className={`px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-all disabled:opacity-50`}
              onClick={increment}
              disabled={quantity >= 20}
            >
              ➕ Increase
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-all disabled:opacity-50`}
              onClick={decrement}
              disabled={quantity <= 0}
            >
              ➖ Decrease
            </button>
          </div>
        </label>

        <label className="flex flex-col">
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 rounded-lg border border-white bg-white text-gray-900"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <button
          className="mt-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
