// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f3efd.firebaseapp.com",
  projectId: "mern-blog-f3efd",
  storageBucket: "mern-blog-f3efd.appspot.com",
  messagingSenderId: "951403851834",
  appId: "1:951403851834:web:f4f781057d4ab6efd5c503",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
