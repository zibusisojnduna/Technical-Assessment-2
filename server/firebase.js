import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7-8-1-0-0",
    authDomain: "zibusiso-nduna-codetribe-2024.firebaseapp.com",
    projectId: "zibusiso-nduna-codetribe-2024",
    storageBucket: "zibusiso-nduna-codetribe-2024.appspot.com",
    messagingSenderId: "101010",
    appId: "1:101010:web:101010",
    measurementId: "G-101010",
};

const app = firebase.initializeApp(firebaseConfig);
export default app;