// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1G-SzhKWPJig9BAbdZC4gvnlN5ZCUEd8",
  authDomain: "meeting-point-1a4c3.firebaseapp.com",
  projectId: "meeting-point-1a4c3",
  storageBucket: "meeting-point-1a4c3.appspot.com",
  messagingSenderId: "795311466955",
  appId: "1:795311466955:web:ff1dea3b81d143520e6e4e",
  measurementId: "G-DVRXGHEJHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth(app);
export default auth;


