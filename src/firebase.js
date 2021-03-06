import firebase from "firebase";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDB2XrHdXwZ5OoAelGl7Er6TIAGIIxk2o",
  authDomain: "jbnu-guide-project.firebaseapp.com",
  projectId: "jbnu-guide-project",
  storageBucket: "jbnu-guide-project.appspot.com",
  messagingSenderId: "45195714163",
  appId: "1:45195714163:web:f56e59336385a8bb30d406",
  measurementId: "G-V01NVYNKMY",
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestoreService = firebase.firestore();
