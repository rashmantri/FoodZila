import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Destructuring environment variables from import.meta.env
const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGE_SENDER,
  VITE_APP_ID,
  VITE_MEASUREMENT_ID
} = import.meta.env;

// Your web app's Firebase configuration using the destructured values
const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: "foodzila-518bd",
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGE_SENDER,
  appId: VITE_APP_ID,
  measurementId: VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);  // Initialize with app instance
