// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNiHsn0dTvHC0vr-4tIhuJEAJHqZxVWGw",
  authDomain: "surf-marketplace.firebaseapp.com",
  projectId: "surf-marketplace",
  storageBucket: "surf-marketplace.appspot.com",
  messagingSenderId: "302118870467",
  appId: "1:302118870467:web:9e71177ec69c316e34b176",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
