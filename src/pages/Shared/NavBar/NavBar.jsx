import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { IoIosCart } from "react-icons/io";
import useCart from '../../../hooks/useCart';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [,cart,refetch]=useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const navbaroption = <>
        <li><Link to={'/'}>HOME</Link></li>
        <li><Link to={'/menu'}>MENU</Link></li>
        <li><Link to={`/order/salad`}>Order Food</Link></li>
        <li><Link to={`/signup`}>SignUp</Link></li> 
        {
            user ?
                <>
                   <Link to='/dashboard/mycart'>
                   <button className="btn mx-3">
                        
                        <div className="badge badge-secondary"><IoIosCart></IoIosCart>{cart?.length || 0}</div>
                    </button>
                   </Link>
                    <p className=' text-yellow-200 mt-2 mx-2 '>{user.displayName}</p>
                    <button className='btn btn-ghost' onClick={handleLogOut}>logout</button>
                </>
                :
                <><li><Link to={`/login`}>Login</Link></li></>
        }
    </>

    return (
        <>
            <div className="navbar bg-base-100 bg-opacity-30 fixed z-10 px-7 mx-auto text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbaroption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">freaks-restaurant </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbaroption}
                    </ul>
                </div>
                {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
            </div>
        </>

    );
};

export default NavBar;