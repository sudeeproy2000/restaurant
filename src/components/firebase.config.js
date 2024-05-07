// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFrA5TLGXSoJ1qVWJaqT1eAo_yyQioBUE",
  authDomain: "dada-boudi.firebaseapp.com",
  projectId: "dada-boudi",
  storageBucket: "dada-boudi.appspot.com",
  messagingSenderId: "990448571167",
  appId: "1:990448571167:web:2fcc4afa38325f408dd62a",
  measurementId: "G-G3FN4XH8SL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
