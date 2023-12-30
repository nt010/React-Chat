import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAFAH5Vvh45ek-0WBc2VIbm-0GE7IrtNvE",
  authDomain: "line-clone-15d1d.firebaseapp.com",
  projectId: "line-clone-15d1d",
  storageBucket: "line-clone-15d1d.appspot.com",
  messagingSenderId: "322324098349",
  appId: "1:322324098349:web:7bec03add6a008b06437a4",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
