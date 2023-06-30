// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXI4FaOuuVBJVehXwqKY9n4h1TKJ5GOuI",
  authDomain: "mariage-ae7e2.firebaseapp.com",
  projectId: "mariage-ae7e2",
  storageBucket: "mariage-ae7e2.appspot.com",
  messagingSenderId: "26874324607",
  appId: "1:26874324607:web:0deb54f837fc9a82ecc14a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
