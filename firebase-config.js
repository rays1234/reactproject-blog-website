// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0AfZgMDeAzX8FJBzIl1kiBBk_ker00uo",
  authDomain: "blog-1c3a2.firebaseapp.com",
  projectId: "blog-1c3a2",
  storageBucket: "blog-1c3a2.appspot.com",
  messagingSenderId: "162760159855",
  appId: "1:162760159855:web:95822d1ad3c1e2b7bd539a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();
export const db=getFirestore(app);
