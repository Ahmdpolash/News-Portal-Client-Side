// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsSivwCGetJHzH-9LfAk6EFcseryYva-4",
  authDomain: "newspaper-website-f1698.firebaseapp.com",
  projectId: "newspaper-website-f1698",
  storageBucket: "newspaper-website-f1698.appspot.com",
  messagingSenderId: "848736677964",
  appId: "1:848736677964:web:a92a39f184109d07b544e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
