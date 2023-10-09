// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCob-DKO8VYTphItpvg5EddBHU2_yChQRE",
  authDomain: "event-project-e4b58.firebaseapp.com",
  projectId: "event-project-e4b58",
  storageBucket: "event-project-e4b58.appspot.com",
  messagingSenderId: "135989478481",
  appId: "1:135989478481:web:e1e985af8c01c092a2e470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;