import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth= getAuth(app)

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)


    const creatUser=(email,password)=>{
       return createUserWithEmailAndPassword(email,password,auth)
    }

    const signIn=(email,password)=>
    {
       return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut=()=>
    {
        signOut(auth)
    }
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)
        })
        
        return ()=>{
            return unsubscribe();
        }

    },[])

    const authinfo={
        user,
        setUser,
        loading,
        creatUser,
        signIn,
        logOut

    };

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



