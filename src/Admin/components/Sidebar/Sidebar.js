import React from "react";
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
    <div className="fixed top-0 h-screen  bg-white  w-[240px]   left-0 z-10 ">
    <div className="flex items-center justify-between mx-3 mt-2">
      <a href="/dashboard">
      <img
src="/img/vatsal.png"
        alt="logo"
        className=" h-24 w-full object-cover md:h-full md:w-48"
      />
      </a>
      
      </div>
      <ul className="py-52 flex flex-col  ml-10 my-4 space-y-5">
      <NavLink  to="dashboard" className={({ isActive }) =>
                    isActive ?  'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px] ' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter    '}>Dashboard</NavLink>
    <NavLink  to="/users" className={({ isActive }) =>
                    isActive ? 'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px] ' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter   '}>Users</NavLink>
    <NavLink  to="/form" className={({ isActive }) =>
    isActive ? 'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter   '}>Edit Form</NavLink>
      </ul>
    </div>
   
    </div>
  );
};

export default Sidebar;
