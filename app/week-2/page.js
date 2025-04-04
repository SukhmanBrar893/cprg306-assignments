import Link from "next/link";
import Title from "./title";

export default function Page(){
    let a =5;
    let b = 6;
   return (
       <div>
         <p> <Link
                className="inline-block font-semibold bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg transition-transform duration-300 hover:bg-blue-600 hover:shadow-xl active:scale-95"
                href="../"
            >
                ← Home
            </Link></p>
           <Title/>
           <Title/>
           <Title/>
           <h1>Welcome to SUKHMAN BRAR week 2</h1>
           <p>The addition is {a*b}</p>
       </div>
   );
}