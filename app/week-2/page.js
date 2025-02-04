import Link from "next/link";
import Title from "./title";

export default function Page(){
    let a =5;
    let b = 6;
   return (
       <div>
        <p><Link className="font-bold bg-blue-200 p-0 m-1" href="../">Home</Link></p>
           <Title/>
           <Title/>
           <Title/>
           <h1>Welcome to SUKHMAN BRAR week 2</h1>
           <p>The addition is {a*b}</p>
       </div>
   );
}