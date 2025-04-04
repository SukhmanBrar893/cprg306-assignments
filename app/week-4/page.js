import NewItem from "./new-item";
import Link from "next/link";

export default function Page() {
    return (
        <div>
        <p> <Link
                className="inline-block font-semibold bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg transition-transform duration-300 hover:bg-blue-600 hover:shadow-xl active:scale-95"
                href="../"
            >
                ← Home
            </Link></p>
            <NewItem />
        </div>
    );
}