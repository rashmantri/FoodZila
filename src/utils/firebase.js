// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMkdDnPfyIJQa-dJVLtBXxGatMniSwnlE",
  authDomain: "foodzila-518bd.firebaseapp.com",
  projectId: "foodzila-518bd",
  storageBucket: "foodzila-518bd.appspot.com",
  messagingSenderId: "128096193287",
  appId: "1:128096193287:web:214c14b3d4fada710e53a2",
  measurementId: "G-RB1E7G1GSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);