// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD1-YVJuZaTOHJ2s7HH-wblQikJzNosmk",
  authDomain: "code8-d7ce8.firebaseapp.com",
  projectId: "code8-d7ce8",
  storageBucket: "code8-d7ce8.appspot.com",
  messagingSenderId: "493450513802",
  appId: "1:493450513802:web:f3c0a83b75e58842c38c73",
  measurementId: "G-TQV1EBXV1M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
