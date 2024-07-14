import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logout = () => {
        return signOut(auth)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        login,
        logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    )
};

export default AuthProvider;
