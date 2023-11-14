import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/Navbar/navBar';

const Main = () => {
    const location=useLocation()
    console.log(location)
    const nofooter=location.pathname ==  '/login' || location.pathname ==  '/signup' 
    return (
        <div>
            {<NavBar></NavBar>}
            <Outlet></Outlet>
            {nofooter || <Footer></Footer>}
        </div>
    );
};

export default Main;