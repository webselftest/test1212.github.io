// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC03sFTH_x3B4VcwAN3QWOzQ4ZscjNDgfc",
  authDomain: "dkbupdate-a01ed.firebaseapp.com",
  databaseURL: "https://dkbupdate-a01ed-default-rtdb.firebaseio.com",
  projectId: "dkbupdate-a01ed",
  storageBucket: "dkbupdate-a01ed.appspot.com",
  messagingSenderId: "596664887917",
  appId: "1:596664887917:web:fa6cbb2dee5a0ba1736d64",
  measurementId: "G-GHK6RH4PGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
////Do Not Edit Below This

firebase.initializeApp(firebaseConfig);
