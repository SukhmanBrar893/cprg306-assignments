import Link from "next/link";
export default function Page() {
    return (
      <main>
         <p><Link className="font-bold bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95"
         href="../">Home</Link></p>
        <h1 className=" font-bold text-blue-900">Week 1 </h1>
        <p className="text-xl italic">
          Hi SUKHMAN Brar Congratulations on correctly setting up your development environment!!
        </p>
      </main>
    );
  }
  