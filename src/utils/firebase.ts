// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBok3A9IBLQXY1xwDl-lfRayNMhxiQg8OA",
  authDomain: "chatter-6d61c.firebaseapp.com",
  projectId: "chatter-6d61c",
  storageBucket: "chatter-6d61c.appspot.com",
  messagingSenderId: "1038065845570",
  appId: "1:1038065845570:web:bbb5603430ea5a924734db",
  measurementId: "G-XG5W9X0W5R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);