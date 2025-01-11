import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.email);
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };
    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input placeholder="Email..." onChange={(e) => setEmail(e.target.value)}></input>
            <input placeholder="Password..." type="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={signIn}>Sign in</button>
            <button onClick={logOut}>Sign out</button>
        </div>
    );
};