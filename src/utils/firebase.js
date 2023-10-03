// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXjOcLQtkDenpCVxOtetOh_1f4PkI4P88",
  authDomain: "medline-9743d.firebaseapp.com",
  projectId: "medline-9743d",
  storageBucket: "medline-9743d.appspot.com",
  messagingSenderId: "307997857675",
  appId: "1:307997857675:web:57306d591717130a7a418e",
  measurementId: "G-EPPMERKLNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();