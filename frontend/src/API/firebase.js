import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCROLZrrVl0DQjmRBXPNBkF0Qw-pLlnkY8",
  authDomain: "filemanagementsystem-5964b.firebaseapp.com",
  projectId: "filemanagementsystem-5964b",
  storageBucket: "filemanagementsystem-5964b.appspot.com",
  messagingSenderId: "888170771966",
  appId: "1:888170771966:web:09d65cc502c1c0c7ae7caf",
  measurementId: "G-8QCB9Z15NL"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
