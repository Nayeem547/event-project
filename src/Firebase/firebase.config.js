// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzRHRoDI00zYJodyXY6ftuF-LIInZXE8I",
  authDomain: "event-project-1f355.firebaseapp.com",
  projectId: "event-project-1f355",
  storageBucket: "event-project-1f355.appspot.com",
  messagingSenderId: "39947741729",
  appId: "1:39947741729:web:fffe52e704817e0ae55160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

export default auth;