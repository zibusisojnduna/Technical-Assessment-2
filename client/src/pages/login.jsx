import React from "react";
import { useState } from "react";
import firebase from "firebase";
import "firebase/auth";
import "../assets/w3.css"
import { Link } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyDFbw6B3K1kx1-qzgOlSPEreC0U30yVxB0",
    authDomain: "technical-assessment-2.firebaseapp.com",
    projectId: "technical-assessment-2",
    storageBucket: "technical-assessment-2.firebasestorage.app",
    messagingSenderId: "351023755875",
    appId: "1:351023755875:web:9381787e9c3edde5c8fe56"
}

const app = initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await firebase.auth().signInWithEmailAndPassword(email, password);
          console.log("Login Successful");
        } catch (error) {
          setError(error.message);
        }
    }
    return (
        <section>
            <div>
                <h2>Login</h2>
                <p>Please enter your email and password to login, or if you don't have an account, create one <Link to={"/signUp"}/> here .</p>

                <form onSubmit={handleLogin}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                    {error && <p>{error}</p>}
                </form>
         </div>
        </section>
        
    )
}

export default Login