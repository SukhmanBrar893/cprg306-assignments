import Link from "next/link";
import NewItem from "./new-item";
export default function Page() {
    return (
      <main>
         <p> <Link
                className="inline-block font-semibold bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg transition-transform duration-300 hover:bg-blue-600 hover:shadow-xl active:scale-95"
                href="../"
            >
                ← Home
            </Link></p>
         <div>
            
            <NewItem />
        </div>
      </main>
    );
  }
  

  