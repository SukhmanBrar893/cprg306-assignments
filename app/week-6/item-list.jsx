"use client";
import Item from "./item.js";
import { useState } from "react";
import shoppingList from "./item.json";

export default function ItemList(props) {
  const [sortby, setSortby] = useState("name");

  const nameSort = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const quantitySort = (a, b) => {
    return a.quantity - b.quantity;
  };

  const categorySort = (a, b) => {
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  };

  shoppingList.sort((a, b) => {
    if (sortby === "name") {
      return nameSort(a, b);
    } else if (sortby === "quantity") {
      return quantitySort(a, b);
    } else if (sortby === "category") {
      return categorySort(a, b);
    }
  });

  return (
    <div className="container mx-auto p-6 bg-blue-50 rounded-lg shadow-xl">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className="text-white font-semibold bg-indigo-600 border-2 border-indigo-700 p-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105"
          onClick={() => setSortby("name")}
        >
          Sort by Name
        </button>
        <button
          className="text-white font-semibold bg-teal-600 border-2 border-teal-700 p-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-teal-700 hover:scale-105"
          onClick={() => setSortby("quantity")}
        >
          Sort by Quantity
        </button>
        <button
          className="text-white font-semibold bg-orange-600 border-2 border-orange-700 p-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-orange-700 hover:scale-105"
          onClick={() => setSortby("category")}
        >
          Sort by Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shoppingList.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}
