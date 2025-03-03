import Link from "next/link";
import NewItem from "./new-item";
export default function Page() {
    return (
      <main>
         <p><Link className="font-bold bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95"
         href="../">Home</Link></p>
         <div>
            
            <NewItem />
        </div>
      </main>
    );
  }
  

  