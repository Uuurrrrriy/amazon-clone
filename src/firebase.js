import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYe_lwWga0ij9pqgPpEIUKu8uHmNhYqTc",
  authDomain: "clone-3c775.firebaseapp.com",
  databaseURL: "https://clone-3c775.firebaseio.com",
  projectId: "clone-3c775",
  storageBucket: "clone-3c775.appspot.com",
  messagingSenderId: "559202114243",
  appId: "1:559202114243:web:97f1760666f54ef6586076",
  measurementId: "G-8J86T4K7Z7",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
