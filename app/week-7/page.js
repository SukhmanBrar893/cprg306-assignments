
"use client";
import NewItem from "./new-item";
import Link from "next/link";

import ItemList from "./item-list";
import { useState } from "react";
import itemData from "./item.json";
export default function Page() {
  const [items, setItems] = useState(itemData);
  const handleAdditem = (item) => {
    setItems([...items, item]);
  };
  return (
    <main>
        <p><Link className="font-bold bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95"
         href="../">Home</Link></p>
    <div>
      <NewItem handleAdditem={handleAdditem} />
      <ItemList items={items} />
    </div>
    </main>
  );
}
