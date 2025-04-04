import Link from "next/link";
export default function Page() {
    return (
      <main>
         <p> <Link
                className="inline-block font-semibold bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg transition-transform duration-300 hover:bg-blue-600 hover:shadow-xl active:scale-95"
                href="../"
            >
                ← Home
            </Link></p>
        <h1 className=" font-bold text-blue-900">Week 1 </h1>
        <p className="text-xl italic">
          Hi SUKHMAN Brar Congratulations on correctly setting up your development environment!!
        </p>
      </main>
    );
  }
  