// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzbuqfxyjQ7dLjkcqTvQTiCeC-z5B0FYU",
    authDomain: "creative-62ac6.firebaseapp.com",
    projectId: "creative-62ac6",
    storageBucket: "creative-62ac6.appspot.com",
    messagingSenderId: "484755116120",
    appId: "1:484755116120:web:f6d393419c6116af267a2d"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth =getAuth(app);

export default auth;