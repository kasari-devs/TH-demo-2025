import React, { useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


const AuthContext = React.createContext();

export function useAuth () {
    return useContext(AuthContext);
}
export function AuthProvider ({ children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signUp (email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login (email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut () {
        return auth.signOut();
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
            
        })
        return unsubscribe;
    }, [])
    
    const value = {
        currentUser,
        signUp,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}