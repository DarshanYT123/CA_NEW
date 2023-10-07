import React from "react";
import classNames from "classnames";
import {
  blue,
  navClass,
} from "../../lib/constants/classes";

const Header = () => {
  return (
    <div>
      <nav className={navClass}>
        {/* Hamburger Menu Icon */}
        <div className="flex flex-row py-2   ">
          <img src="/img/dashboard.png" className=" w-[14%] h-[10%] " alt="" />
          <div className="flex flex-col py-2 px-2 ">
            <h2 className="text-[color:var(--01,#211F3B)] text-[18px] font-Montserrat not-italic font-bold leading-[normal]">
              Anjali Mandal
            </h2>
            <h2 className=" pt-1 text-[#7FB64E] text-[10px] not-italic font-semibold leading-[normal]">
              Job Role
            </h2>
          </div>
        </div>
        {/* End */}
        {/* Header Components */}
        <div className={classNames(blue, " relative -left-28  text-[20px] not-italic font-bold leading-[normal] tracking-[0.4px] cursor-pointer")}>
          <p id="header_title"></p> 
        </div>
        {/* <div className="relative">
        <h2 className="text-[#12B28C] text-[20px] not-italic font-bold leading-[normal] tracking-[0.4px]">
          Dashboard
        </h2>
        </div> */}
        <div className="relative cursor-pointer">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="22"
          viewBox="0 0 17 22"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2071 8.79633C15.2071 10.0523 15.539 10.7925 16.2695 11.6456C16.8231 12.2741 17 13.0808 17 13.956C17 14.8302 16.7128 15.6601 16.1373 16.3339C15.384 17.1417 14.3215 17.6573 13.2372 17.747C11.6659 17.8809 10.0937 17.9937 8.5005 17.9937C6.90634 17.9937 5.33505 17.9263 3.76375 17.747C2.67846 17.6573 1.61602 17.1417 0.863666 16.3339C0.28822 15.6601 0 14.8302 0 13.956C0 13.0808 0.177901 12.2741 0.730488 11.6456C1.48384 10.7925 1.79392 10.0523 1.79392 8.79633V8.3703C1.79392 6.68834 2.21333 5.58852 3.077 4.51186C4.36106 2.9417 6.41935 2 8.45577 2H8.54522C10.6254 2 12.7502 2.98702 14.0125 4.62466C14.8314 5.67916 15.2071 6.73265 15.2071 8.3703V8.79633ZM5.57367 20.0608C5.57367 19.5573 6.03582 19.3266 6.46318 19.2279C6.96309 19.1222 10.0093 19.1222 10.5092 19.2279C10.9366 19.3266 11.3987 19.5573 11.3987 20.0608C11.3738 20.5402 11.0926 20.9653 10.704 21.2352C10.2001 21.628 9.60875 21.8767 8.99057 21.9664C8.64868 22.0107 8.31276 22.0117 7.98279 21.9664C7.36362 21.8767 6.77227 21.628 6.26938 21.2342C5.87978 20.9653 5.59852 20.5402 5.57367 20.0608Z"
            fill="#211F3B"
          />
          <circle cx="14" cy="3" r="3" fill="#12B28C" />
        </svg>{" "}
          {/* <AiOutlineDown
            fontSize={20}
            className={classNames(userButtonClass, "hidden md:block")}
          /> */}
        </div>
        {/* End */}
      </nav>
    </div>
  );
};

export default Header;
