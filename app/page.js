// /app/page.js

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="Merriweather', 'serif'"> 
      <div className="container mx-auto text-center">
        
        <h1 className="text-4xl font-extrabold mb-10 text-black">Brar web-dev assignments </h1>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          
          <Link href="/week-1">
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 1</h2>
              
            </div>
          </Link>

          
          <Link href="/week-2">
            <div className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 2</h2>
              
            </div>
          </Link>

          <Link href="/week-3">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 3</h2>
              
            </div>
          </Link>

          <Link href="/week-4">
            <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 4</h2>
              
            </div>
          </Link>

          <Link href="/week-5">
            <div className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 5</h2>
              
            </div>
          </Link>

          <Link href="/week-6">
            <div className="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 6</h2>
              
            </div>
          </Link>

          <Link href="/week-7">
            <div className="bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 7</h2>
              
            </div>
          </Link>

          <Link href="/week-8">
            <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 8</h2>
              
            </div>
          </Link>

          <Link href="/week-9">
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 9</h2>
            
            </div>
          </Link>

          <Link href="/week-10">
            <div className="bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 10</h2>
              
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
