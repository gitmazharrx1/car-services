// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUb2FKUEQhdAm5ivX4noTfzP7KH8DHrzc",
  authDomain: "car-services-d4452.firebaseapp.com",
  projectId: "car-services-d4452",
  storageBucket: "car-services-d4452.appspot.com",
  messagingSenderId: "857052248376",
  appId: "1:857052248376:web:f27fd7c21b0c91a0cca9cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
