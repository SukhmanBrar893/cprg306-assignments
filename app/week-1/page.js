import Link from "next/link";
export default function Page() {
    return (
      <main>
        <p><Link className="font-bold bg-blue-200 p-0 m-1" href="../">Home</Link></p>
        <h1 className=" font-bold text-blue-900">Week 1 </h1>
        <p className="text-xl italic">
          Congratulations on correctly setting up your development environment!!
        </p>
      </main>
    );
  }
  