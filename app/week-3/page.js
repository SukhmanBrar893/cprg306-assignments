import ItemList from './item-list.js';
import Link from 'next/link.js';
export default function Page() {
    return (
        <div className="bg-grey-200 p-2">
         <p> <Link
                className="inline-block font-semibold bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg transition-transform duration-300 hover:bg-blue-600 hover:shadow-xl active:scale-95"
                href="../"
            >
                ← Home
            </Link></p>

        <h1 className="text-4xl text-center ">Shopping List</h1>
        <ItemList />
        </div>
    );
}