import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCT3EBlbfhTZ5C60s51HH3HjZzrjq6F3CY",
  authDomain: "discord-clone-udemy-5b840.firebaseapp.com",
  projectId: "discord-clone-udemy-5b840",
  storageBucket: "discord-clone-udemy-5b840.appspot.com",
  messagingSenderId: "889293111722",
  appId: "1:889293111722:web:4a241649ec42708ad16bd3",
  measurementId: "G-CBSSM2EC38"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db};