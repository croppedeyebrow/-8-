import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwl487Ijmhk6YF6spg7UW8eHiyimv0soc",
  authDomain: "mini-project-practice-f50d0.firebaseapp.com",
  projectId: "mini-project-practice-f50d0",
  storageBucket: "mini-project-practice-f50d0.appspot.com",
  messagingSenderId: "44061879022",
  appId: "1:44061879022:web:df7daf5934920a405361ff",
  measurementId: "G-4LPWWCBFFQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
