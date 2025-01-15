import React from "react";
import { useState } from "react";
import { auth } from "../firebase";

const SignUp = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            history.push("/dashboard");
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}