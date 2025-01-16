import React from "react";
import { useState } from "react";
import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFbw6B3K1kx1-qzgOlSPEreC0U30yVxB0",
    authDomain: "technical-assessment-2.firebaseapp.com",
    projectId: "technical-assessment-2",
    storageBucket: "technical-assessment-2.firebasestorage.app",
    messagingSenderId: "351023755875",
    appId: "1:351023755875:web:9381787e9c3edde5c8fe56"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = firebase.auth().currentUser;
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input style={{width:"100%", padding:"3%", marginTop:"3%"}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input style={{width:"100%", padding:"3%", marginTop:"3%"}} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button style={{width:"100%", padding:"3%", color:"white", borderRadius:"5%", cursor:"pointer"}} type="submit">Sign Up</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}
export default SignUp