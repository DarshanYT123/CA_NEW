import React from 'react'

const PageTabNavItem = ({ id, title, activeTab, setActiveTab }) => {

     const handleClick = () => {
          setActiveTab(id);
     };

     return (
          <li onClick={handleClick} className={" py-2 px-10  font-inter cursor-pointer  text-[14px] not-italic font-normal whitespace-nowrap leading-[normal]" + (activeTab === id ? "text-[14px] text-[#12B28C] font-semibold border-b-2 border-[#12B28C]" : "text-[14px] text-black")}>
               {title}
          </li>
     )
}

export default PageTabNavItem