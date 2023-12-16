import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialSignIn = () => {

    const {goggleSignIn}=useContext(AuthContext)
    const location=useLocation()
    console.log(location)
    const navigate=useNavigate()

    const handleGoogleSignin=()=>{
        goggleSignIn()
        .then((result) => {
            const user = result.user;
            // console.log(user);
            const saveduser={name:user.displayName,email:user.email}
            fetch(`http://localhost:5000/users`,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveduser)
            })
            .then(res=>res.jason())
            .then(data=>{
                console.log(data)
            }
                )
            

            navigate('/')
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }

    return (
        <div>
            <div className="flex flex-col w-full">
                <div className="divider"> Social Media Login...!!! </div>
                <div className='flex items-center justify-center'>
                <button onClick={handleGoogleSignin} className="btn btn-circle text-3xl text-green-500">
                    <FaGoogle></FaGoogle>
                </button>
                </div>
            </div>
        </div>
    );
};

export default SocialSignIn;