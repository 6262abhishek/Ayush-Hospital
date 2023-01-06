// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGRLdLDNzo36mGUeeVcJrwPn2NiGA7JBU",
  authDomain: "crud-application-809e1.firebaseapp.com",
  databaseURL: "https://crud-application-809e1-default-rtdb.firebaseio.com",
  projectId: "crud-application-809e1",
  storageBucket: "crud-application-809e1.appspot.com",
  messagingSenderId: "729680347218",
  appId: "1:729680347218:web:0e117e8ff173636ef05f8b",
  measurementId: "G-HB9MP9TB59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);