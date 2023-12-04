import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth= getAuth(app)

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)


    const creatUser=(email,password)=>{
        // console.log('csvdjwdbnlwk.,',email,password)
       return createUserWithEmailAndPassword(auth,email,password)
       setLoading(false)
    }

    const signIn=(email,password)=>
    {
       return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut=()=>
    {
       return signOut(auth)
    }

    const userUpdate=(name,photourl)=>
    {
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
          })
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
        logOut,
        userUpdate

    };

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



