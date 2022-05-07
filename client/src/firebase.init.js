// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLYMoe_55Vrk6BMoLq2IJWE5wLzNws0Hk",
  authDomain: "toy-house-3d775.firebaseapp.com",
  projectId: "toy-house-3d775",
  storageBucket: "toy-house-3d775.appspot.com",
  messagingSenderId: "1077962923637",
  appId: "1:1077962923637:web:ca2e32bfcc2dbb5a6d223c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;

