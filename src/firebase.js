// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAddsaYzosxS_qRvUOXyxo4X4Tkjis_5IQ",
  authDomain: "hr-mangment.firebaseapp.com",
  projectId: "hr-mangment",
  storageBucket: "hr-mangment.appspot.com",
  messagingSenderId: "821104516324",
  appId: "1:821104516324:web:cf5cd76ff028e616c8a0f1",
  databaseURL:
    "https://hr-mangment-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
