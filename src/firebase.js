import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG2hpeYLLSRDaIfpCk7mf5D1oj1cTX824",
  authDomain: "authentication-e7d5d.firebaseapp.com",
  projectId: "authentication-e7d5d",
  storageBucket: "authentication-e7d5d.appspot.com",
  messagingSenderId: "1029021654707",
  appId: "1:1029021654707:web:14aa4dee98449061701ac6",
  measurementId: "G-MFP6M081T7",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
