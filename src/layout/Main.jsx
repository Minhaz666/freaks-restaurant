import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/Navbar/navBar';

const Main = () => {
    const location=useLocation()
    console.log(location)
    const loginPath=location.pathname ==  '/login'
    return (
        <div>
            {<NavBar></NavBar>}
            <Outlet></Outlet>
            {loginPath || <Footer></Footer>}
        </div>
    );
};

export default Main;