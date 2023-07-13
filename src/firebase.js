// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM9Bp0msLCtK-2XtW8z0jmUTy610wKqQI",
  authDomain: "chatvia-5d047.firebaseapp.com",
  databaseURL: "https://chatvia-5d047-default-rtdb.firebaseio.com",
  projectId: "chatvia-5d047",
  storageBucket: "chatvia-5d047.appspot.com",
  messagingSenderId: "980596353203",
  appId: "1:980596353203:web:315c4a78afe2065064a8c6"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;