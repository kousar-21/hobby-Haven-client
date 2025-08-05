import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState("")

    // const user = auth.currentUser;
    // console.log(loading)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const userProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(()=>{
        const subscriber = onAuthStateChanged(auth, (currentUser)=> {
            setUsers(currentUser)
            setLoading(false)
        })
        return ()=>{
            subscriber()
        }
    },[])

    const logOut = () => {
        return signOut(auth)
    }


    const userData = {
        createUser,
        signInUser,
        googleSignIn,
        users,
        setUsers,
        userProfile,
        logOut,
        loading,
        theme,
        setTheme
    }


    return (
        <AuthContext value={userData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;