// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1_BzYsKns726gZQa5sOxP1tHJZFO6-bE",
    authDomain: "top-gear-5b785.firebaseapp.com",
    projectId: "top-gear-5b785",
    storageBucket: "top-gear-5b785.appspot.com",
    messagingSenderId: "193976724872",
    appId: "1:193976724872:web:2044cd07bca68778a31e3d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Initialize Firebase
export default auth;