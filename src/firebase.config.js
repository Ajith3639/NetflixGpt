// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Gr5QA-zB5wyRcmR1FrBTeGRTMdwt9Fc",
  authDomain: "netflixgpt-cdc77.firebaseapp.com",
  projectId: "netflixgpt-cdc77",
  storageBucket: "netflixgpt-cdc77.appspot.com",
  messagingSenderId: "1073734622802",
  appId: "1:1073734622802:web:c6031bd49ae4ff3ecc098b",
  measurementId: "G-ZF10PCKSM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
