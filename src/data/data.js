// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA91n2lhqlyLS6WDczKSjc1tyjqv3i4ids",
  authDomain: "focusly-df83f.firebaseapp.com",
  projectId: "focusly-df83f",
  storageBucket: "focusly-df83f.appspot.com",
  messagingSenderId: "799742985312",
  appId: "1:799742985312:web:ffce27e9a67a560932ef05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
