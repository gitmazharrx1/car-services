// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY_apiKey,
  authDomain: process.env.API_KEY_authDomain,
  projectId: process.env.API_KEY_projectId,
  storageBucket: process.env.API_KEY_storageBucket,
  messagingSenderId: process.env.API_KEY_messagingSenderId,
  appId: process.env.API_KEY_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
