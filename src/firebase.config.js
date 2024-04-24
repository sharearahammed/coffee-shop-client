// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6HD-7_YRJa_fB8RDXMRKXgAhvj9_C6L8",
  authDomain: "coffee-store-b48e3.firebaseapp.com",
  projectId: "coffee-store-b48e3",
  storageBucket: "coffee-store-b48e3.appspot.com",
  messagingSenderId: "372877541649",
  appId: "1:372877541649:web:6c7366e82bff13a3feccb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;