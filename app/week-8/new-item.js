"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const increment = () => setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
    const decrement = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        const id = Math.random().toString(36).slice(2, 11);
        onAddItem({ id, name, quantity, category });
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="p-6 bg-white rounded-2xl shadow-lg w-fit mx-left border border-gray-300"
        >
            <div className="flex items-center space-x-3">
                <button 
                    type="button" 
                    onClick={decrement} 
                    disabled={quantity === 1} 
                    className="px-4 py-2 bg-gray-400 text-white rounded-lg disabled:bg-gray-300 hover:bg-gray-500 transition"
                >
                    -
                </button>
                <span className="text-xl font-bold text-gray-700">{quantity}</span>
                <button 
                    type="button" 
                    onClick={increment} 
                    disabled={quantity === 20} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 hover:bg-blue-600 transition"
                >
                    +
                </button>
            </div>

            <div className="mt-4">
                <label className="block text-lg text-gray-700 font-semibold mb-1">Item Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter item name" 
                    className="p-2 border border-gray-400 text-gray-700 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required 
                />
            </div>

            <div className="mt-4">
                <label className="block text-lg text-gray-700 font-semibold mb-1">Select Category:</label>
                <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    className="p-2 border border-gray-400 rounded-lg w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {name && (
                <p className="mt-3 text-lg text-gray-700 font-semibold">Item: {name}</p>
            )}
            {category && (
                <p className="mt-1 text-lg text-gray-600">Category: {category}</p>
            )}

            <button 
                type="submit" 
                className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md"
            >
                Add Item
            </button>
        </form>
    );
}
