"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 p-10 text-left flex flex-col items-start justify-start space-y-6">
            <Link
                className="inline-block font-semibold bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg transition-transform duration-300 hover:bg-blue-600 hover:shadow-xl active:scale-95"
                href="../"
            >
                ← Home
            </Link>

            {!user ? (
                <>
                    <h1 className="text-5xl font-extrabold text-purple-700 mb-4 drop-shadow">
                        🛍️ Welcome to the Shopping List App
                    </h1>
                    <p className="text-lg text-purple-600 mb-4 max-w-xl">
                        Sign in to start creating and managing your personalized shopping list.
                    </p>
                    <button
                        onClick={gitHubSignIn}
                        className="bg-yellow-300 text-purple-800 font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition-transform transform hover:scale-105 shadow-md"
                    >
                        Sign in with GitHub
                    </button>
                </>
            ) : (
                <>
                    <h1 className="text-4xl font-bold text-purple-800 mb-2 drop-shadow">
                        👋 Welcome, {user.displayName}!
                    </h1>
                    <p className="text-md text-pink-700 mb-4">({user.email})</p>

                    <Link
                        href="/week-10"
                        className="inline-block text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-full shadow-md hover:shadow-xl hover:from-purple-600 hover:to-pink-600 transition"
                    >
                        📝 Go to your Shopping List
                    </Link>

                    <button
                        onClick={firebaseSignOut}
                        className="mt-6 px-6 py-2 bg-red-400 text-white rounded-full font-medium hover:bg-red-500 transition-transform transform hover:scale-105 shadow-md"
                    >
                        🚪 Log out
                    </button>
                </>
            )}
        </main>
    );
}
