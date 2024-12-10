/** @format */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For authentication
import { getFirestore } from "firebase/firestore"; // For Firestore (if used)

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCJ-Jfjy-brT4WZKT9JSsIxsyzXG5FGe8o",
  authDomain: "reb-7ceb2.firebaseapp.com",
  projectId: "reb-7ceb2",
  storageBucket: "reb-7ceb2.firebasestorage.app",
  messagingSenderId: "1040432014131",
  appId: "1:1040432014131:web:fd3a7e91b5583e4b9ad446",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
