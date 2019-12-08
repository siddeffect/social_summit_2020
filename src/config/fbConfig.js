import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCcY9Fs7KjgzMbhzNAfizcqpO7MulP7jto",
  authDomain: "social-summit-2020.firebaseapp.com",
  databaseURL: "https://social-summit-2020.firebaseio.com",
  projectId: "social-summit-2020",
  storageBucket: "social-summit-2020.appspot.com",
  messagingSenderId: "980109660541",
  appId: "1:980109660541:web:d0318a0ccd7d5f02d93c14",
  measurementId: "G-8D6C9BSKSG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
