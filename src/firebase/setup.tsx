// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj19_AC9ArdSK6zSUQhWwwBJFFaeeZ6dM",
  authDomain: "airbnb-clone-9dabd.firebaseapp.com",
  projectId: "airbnb-clone-9dabd",
  storageBucket: "airbnb-clone-9dabd.appspot.com",
  messagingSenderId: "1052884644149",
  appId: "1:1052884644149:web:5e63ec77b2f58fb8cb9c7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider= new GoogleAuthProvider();
export const database = getFirestore(app)