// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeR2WuPEMQXuYM8f_wIMJK6QAK82XiRsk",
  authDomain: "estates-4d01a.firebaseapp.com",
  projectId: "estates-4d01a",
  storageBucket: "estates-4d01a.appspot.com",
  messagingSenderId: "740713053823",
  appId: "1:740713053823:web:623e102a5cae1a70e2c94a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();