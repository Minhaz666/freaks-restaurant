import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth= getAuth(app)

export const AuthContext=createContext()

const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)


    const creatUser=(email,password)=>{
        // console.log('csvdjwdbnlwk.,',email,password)
       return createUserWithEmailAndPassword(auth,email,password)
       setLoading(false)
    }

    const goggleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
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

            if(user){
                fetch('http://localhost:5000/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(user)
                   
                })
                .then(res=>res.json())
                .then(data=>{
                    // console.log(data)
                    localStorage.setItem('access-token',data.token)

                    setLoading(false)
                })
            }

            
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
        userUpdate,
        goggleSignIn,
    };

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



