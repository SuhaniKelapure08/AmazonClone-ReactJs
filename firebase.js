//  import firebase from "firebase";
import firebase from 'firebase/compat/app';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlS570SIPkrM85iiX-mdnNl9wzg8CBPo4",
  authDomain: "clone-fa0b9.firebaseapp.com",
  projectId: "clone-fa0b9",
  storageBucket: "clone-fa0b9.appspot.com",
  messagingSenderId: "456104033407",
  appId: "1:456104033407:web:dcb297ff019d55760d934a",
  measurementId: "G-54EQQFWV1V"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

