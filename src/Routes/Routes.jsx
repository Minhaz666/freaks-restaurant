
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/signUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layout/DashBoard";
import Mycart from "../pages/Dashboard/Mycart";
import Payment from "../pages/Dashboard/Payment";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:
      [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/menu',
            element:<Menu></Menu>
        },
        {
            path: '/order/:category',
            element:<Order></Order>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/signup',
            element:<SignUp></SignUp>
        },
      ] 
    },
    {
      path:"/dashboard",
      element:<DashBoard></DashBoard>,
      children:
      [
        {
          path:'/dashboard/mycart',
          element:<Mycart></Mycart>
        },
        {
          path:'/dashboard/payment',
          element:<Payment></Payment>
        },
      ]
    }
  ]);




export default router;