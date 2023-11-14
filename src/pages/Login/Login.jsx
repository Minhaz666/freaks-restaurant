import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [disabled,setDisabled]=useState(true)

    const {signIn,user,setUser}=useContext(AuthContext)

    useEffect(()=>{
        loadCaptchaEnginge(4)
    },[])

    const captchaRef=useRef(null)

    const handleLogin=(event)=>{
        event.preventDefault()
        const email=event.target.email.value
        const password=event.target.password.value;
        signIn(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    const handleValidationCaptcha=()=>
    {
        const UserCaptchaValue=captchaRef.current.value;

        if (validateCaptcha(UserCaptchaValue)==true) {
            alert('Captcha Matched');
            setDisabled(false)
        }

        else {
            alert('Captcha Does Not Match');
            setDisabled(true)
        }

    }

    return (
        <div>
          <div className="hero min-h-screen bg-base-200" >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input type="text" placeholder="type the above text" name='captcha' ref={captchaRef} className="input input-bordered" required />
                                <button className='btn btn-xs mt-2' onClick={handleValidationCaptcha}>validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" disabled={disabled} className='btn btn-primary' value='Login' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;