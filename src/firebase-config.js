// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoD8zLixi6Dgrs1nkGi9v9gRcBVrOWIWM",
  authDomain: "rka-website-careers.firebaseapp.com",
  projectId: "rka-website-careers",
  storageBucket: "rka-website-careers.firebasestorage.app",
  messagingSenderId: "636439517699",
  appId: "1:636439517699:web:7011ae755cbdbd2038cc36",
  measurementId: "G-YXG8XYGGFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);