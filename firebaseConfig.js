// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdfiI9E45VxfaAx7C0UItE-z8QXWmlYxQ",
  authDomain: "apt-mark-408318.firebaseapp.com",
  projectId: "apt-mark-408318",
  storageBucket: "apt-mark-408318.appspot.com",
  messagingSenderId: "310889988474",
  appId: "1:310889988474:web:e2b957a58f636a64da56c3",
  measurementId: "G-KL1N04L0P4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);