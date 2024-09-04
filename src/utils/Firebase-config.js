
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuQXPMP-yVxM9D6BHrig0nhXtkInCbJT8",
  authDomain: "react-netflix-clone-c9f26.firebaseapp.com",
  projectId: "react-netflix-clone-c9f26",
  storageBucket: "react-netflix-clone-c9f26.appspot.com",
  messagingSenderId: "767460529632",
  appId: "1:767460529632:web:87f54028b7496339e38785",
  measurementId: "G-G8H1Z50VN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);
