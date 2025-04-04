import Link from "next/link";
import ItemList from "./item-list";
export default function Page() {
    return (
      <main>
         <p> <Link
                className="inline-block font-semibold bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg transition-transform duration-300 hover:bg-blue-600 hover:shadow-xl active:scale-95"
                href="../"
            >
                ← Home
            </Link></p>
         
         <h1 className="text-4xl font-extrabold text-center text-gray-800 bg-gradient-to-r from-indigo-200 to-teal-600 p-4 rounded-lg shadow-md">
  Shopping List
</h1>

         <ItemList />
        
      </main>
    );
  }
  

  