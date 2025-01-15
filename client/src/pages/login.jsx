import React from "react";
import { useState } from "react";
import { auth } from "../firebase";

const Login = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            history.push("/dashboard");
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Login