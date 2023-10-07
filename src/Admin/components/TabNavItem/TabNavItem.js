import React from 'react'

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
     const handleClick = () => {
          setActiveTab(id);
     };

     return (
          <li onClick={handleClick} className={"text-[#1A477A] py-3 px-5 mx-3 text-sm cursor-pointer border-b-2 " + (activeTab === id ? "border-[#FFA412]" : "border-transparent")}>
               {title}
          </li>
     )
}

export default TabNavItem