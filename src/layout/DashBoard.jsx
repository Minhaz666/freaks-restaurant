import React from 'react';
import { FaHouse, FaCalendarDays, FaMoneyCheckDollar, FaCartShopping, FaCalendarCheck, FaUtensils, FaWallet, FaBook, FaUsers, FaHouseMedical, FaHouseLock } from "react-icons/fa6";
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {


  // ToDo
  const isAdmin = true;

  return (
    <div>
      <div className="drawer lg:drawer-open  ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open</label>

        </div>
        <div className='drawer-side'>
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 min-h-full  text-base-content text-center bg-[#6fbcc5] text-black ">
            {
              isAdmin ?
                <>
                  <h1 className='text-5xl text-justify'>Freak</h1>
                  <h3 className='text-3xl mb-8 text-justify '>Restaurant</h3>


                  <li><NavLink to="/dashboard/adminhome"><FaHouseLock></FaHouseLock> Admin Home</NavLink></li>
                  <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                  <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                  <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
                  <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                </>
                :
                <>
                  {/* Sidebar content here */}

                  <h1 className='text-5xl text-justify'>Freak</h1>
                  <h3 className='text-3xl mb-8 text-justify '>Restaurant</h3>

                  <li><NavLink to='/'><FaHouse />User Home</NavLink></li>
                  <li><NavLink to='/dashboard/reservation'><FaCalendarDays /> Reservation</NavLink></li>
                  <li><NavLink to='/dashboard/payment'><FaMoneyCheckDollar /> Payment History</NavLink></li>
                  <li><NavLink to='/dashboard/mycart'><FaCartShopping /> My cart</NavLink></li>
                  <li><NavLink to='/dashboard/booking'><FaCalendarCheck /> My Bookings</NavLink></li>

                </>
            }

            <div className='divider bg-blue-400'></div>

            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/menu'}>Menu   </NavLink></li>
            <li><NavLink to={'/order/salad'}>order</NavLink></li>

          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashBoard;