// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJLt1L_1qvVylxrbhw2dJEWZsXDanixvc",
  authDomain: "demo2025-c9777.firebaseapp.com",
  projectId: "demo2025-c9777",
  storageBucket: "demo2025-c9777.firebasestorage.app",
  messagingSenderId: "386417612847",
  appId: "1:386417612847:web:ac851705ac070c643cceda",
  measurementId: "G-B3F2PRDFS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore (app);