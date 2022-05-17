import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCHcKsLhUody7T9IzuL3G-iZooSbCi33yE",
  authDomain: "clone-9bc6a.firebaseapp.com",
  projectId: "clone-9bc6a",
  storageBucket: "clone-9bc6a.appspot.com",
  messagingSenderId: "549382619972",
  appId: "1:549382619972:web:0dd4f61edd9d82039d8d11",
  measurementId: "G-9KVNKECR2S",
});

const auth = firebase.auth();

export { auth };
