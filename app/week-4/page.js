import NewItem from "./new-item";
import Link from "next/link";

export default function Page() {
    return (
        <div>
        <p><Link className="font-bold bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95"
         href="../">Home</Link></p>
            <NewItem />
        </div>
    );
}