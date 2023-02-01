// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm1VIBolYzUB6juOK3P7pUk0NTiaFI3Ng",
  authDomain: "newsgeek-b125c.firebaseapp.com",
  projectId: "newsgeek-b125c",
  storageBucket: "newsgeek-b125c.appspot.com",
  messagingSenderId: "863650205309",
  appId: "1:863650205309:web:7a543f81b1bc1cd17b2b14",
  measurementId: "G-6KCV3D9VD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);