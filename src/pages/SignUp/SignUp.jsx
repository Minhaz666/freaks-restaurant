import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
    const { creatUser, userUpdate } = useContext(AuthContext)

    const [errormess, seterrormess] = useState("")
    const navigate=useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        seterrormess('')

        creatUser(data.email, data.password)
            .then(result => {

                userUpdate(data.name, data.photoUrl)
                    .then(() => {

                        const saveUser={name:data.name,email:data.email}
                        // console.log(saveUser)

                        fetch('http://localhost:5000/users',{
                            method:"POST",
                            headers:{
                                'content-type':'application/json',
                            },
                            body: JSON.stringify(saveUser)
                        })
                        .then(res=>res.json())
                        .then(data=>{
                            console.log(data.insertedId)
                            if(data.insertedId){
                                console.log(data.insertedId)
                                reset();

                                Swal.fire({
                                    title: "update",
                                    text: "successfully email updated",
                                    // icon: "question"
                                });

                                navigate('/login')

                            }
                        })
                    })

                    .catch((error) => {
                        errormess = error.message;
                        seterrormess(errormess)
                    });

                Swal.fire({
                    title: "Success",
                    text: "successfully created",
                    // icon: "question"
                });

                reset();
                const user = result.user;
                console.log(user)
            })

            .catch((error) => {
                const errorMessage = error.message;
                // ..
                seterrormess(errorMessage)
            });
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" {...register("name", { required: true })} />
                            {
                                errors.name?.type === 'required' && <p className='text-red-600'>name must be required</p>
                            }
                        </div>

                        {/* photo URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" name='name' className="input input-bordered" {...register("photoUrl", { required: true })} />
                            {
                                errors.photoUrl?.type === 'required' && <p className='text-red-600'>photo URL must be required</p>
                            }
                        </div>

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' {...register("email", { required: true })} className="input input-bordered" />
                            {
                                errors.email?.type === 'required' && <p className='text-red-600'>email must be required</p>
                            }
                        </div>

                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='pass' {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} className="input input-bordered" />
                            {errors.password?.type === "required" && (
                                <p className=' text-red-500'>password must be required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className=' text-red-500'>password must be at least 6 character</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className=' text-red-500'>password must be less than 20 character</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className=' text-red-500'>Password must have one Uppercase one lower case, one number and one special character.</p>
                            )}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <p className=' text-red-500'>{errormess}</p>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type='submit' value="SignUp"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;