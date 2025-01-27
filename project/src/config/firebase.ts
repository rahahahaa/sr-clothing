import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAFxrIs_-QGDWl-5scOK9ZnUNNt9g4i8vc",
  authDomain: "sr-clothing-a581a.firebaseapp.com",
  projectId: "sr-clothing-a581a",
  storageBucket: "sr-clothing-a581a.firebasestorage.app",
  messagingSenderId: "820264914177",
  appId: "1:820264914177:web:d5df13c9c6528e6be61f00",
  measurementId: "G-6Q0XJ4VNDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Set persistence to local
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting auth persistence:", error);
});