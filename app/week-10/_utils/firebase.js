// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDZrf-CQeXgMIvxO-3s-M00Uw50ZfKYk0",
    authDomain: "cprg306-assignments-d1841.firebaseapp.com",
    projectId: "cprg306-assignments-d1841",
    storageBucket: "cprg306-assignments-d1841.firebasestorage.app",
    messagingSenderId: "774432986764",
    appId: "1:774432986764:web:c2f1d98efb280a92578da9",
    measurementId: "G-GBG4P0677Y"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);