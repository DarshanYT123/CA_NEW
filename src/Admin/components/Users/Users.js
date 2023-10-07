import React, { useState } from 'react';

//Images

//Components
import TabNavItem from '../TabNavItem/PageTabNavItem';
import TabContent from '../TabContent/PageTabContent';

const Users = () => {
  const TableData = [
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Add to CRM",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Add to CRM",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Add to CRM",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Add to CRM",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Add to CRM",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Add to CRM",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Add to CRM",
    },
  ];
  const TableDataSecond = [
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Edit User",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Edit User",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Edit User",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Edit User",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Edit User",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Edit User",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Edit User",
    },
  ];
  const TableDataThird = [
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Recover",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Recover",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Recover",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Recover",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Recover",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Recover",
    },
    {
      srno: "1.",
      noc: "kushal shah",
      mno: "9586388741",
      eid: "Kushal777@gmail.com",
      rby: "Dashboard,Inquiry",
      sby: "Recover",
    },
  ];
     const [activeTab, setActiveTab] = useState("tab1");

    //  const handleDelete = (id) => {
    // axios.get('https://localhost:3000/users/'+id)
    // .then(res => { 
    // console.log(item.srno)
    // userName(res.data.name)
    // userMobile(res.data.mobile)
    // userEmail(res.data.email)
    // userReference(res.data.reference)
    // userSort(res.data.sort)
    // })
    // }

     return (
          <div className='w-[99.2%] pl-2 '>
               <ul className='flex items-center bg-white px-3'>
                    <TabNavItem title="Active" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="Removed" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="All" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
               </ul>
               
                    <TabContent id="tab1" activeTab={activeTab}>
                    <div className="">
      {/* <div>
        <h2 className=" text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Inquiries</h2>
      </div> */}
      <div className=" flex flex-col md:flex-row ">
        <div className=" w-full max-h-[650px] h-fit ">
          <table className="table-auto border-spacing-0 border-collapse w-full border-0">
            <thead id="table_fixed">
               <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#12B28C] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
                <th className="px-[1.2rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Sr No.</p>
                </th>
                <th className="px-[1.5rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Name Of Client</p>
                </th>
                <th className="px-[2.2rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Mobile No</p>
                </th>
                <th className="px-[5.1rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Email id</p>
                </th>
                <th className="px-[2.7rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Access</p>
                </th>
                <th className="text-center  px-[3.1rem] py-4 whitespace-nowrap">
                  <p className="font-semibold bg-white  px-2  text-black">Shot By</p>
                </th>
                
              </tr>
            </thead>
            <tbody id="contain">
              {TableData.map((item, index) => (
                <tr
                  id="table_scroll"
                  className="text-sm bg-[#F5F5F5] h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
                  key={index}
                >
                  <td className="px-[2.3rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.srno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.noc}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2.1rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.mno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.eid}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.7rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.rby}
                      </div>

                    </div>
                  </td>
                  <td className="px-[2rem] whitespace-nowrap gap-x-4 flex flex-row justify-center items-center py-4 ">
                    <div className="bg-[#12B28C] px-3 py-2 ">
                      <div className="text-white font-inter text-sm not-italic font-semibold leading-[normal]">
                        {item.sby}
                      </div>
                    </div>
                    <div className="bg-black px-2 py-1.5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M8.33329 3.33329C6.49234 3.33329 4.99996 4.82568 4.99996 6.66663C4.99996 8.50757 6.49234 9.99996 8.33329 9.99996C10.1742 9.99996 11.6666 8.50757 11.6666 6.66663C11.6666 4.82568 10.1742 3.33329 8.33329 3.33329ZM3.33329 6.66663C3.33329 3.9052 5.57187 1.66663 8.33329 1.66663C11.0947 1.66663 13.3333 3.9052 13.3333 6.66663C13.3333 9.42805 11.0947 11.6666 8.33329 11.6666C5.57187 11.6666 3.33329 9.42805 3.33329 6.66663ZM13.3333 11.6666C13.3333 11.2064 13.7064 10.8333 14.1666 10.8333H17.5C17.9602 10.8333 18.3333 11.2064 18.3333 11.6666C18.3333 12.1269 17.9602 12.5 17.5 12.5H14.1666C13.7064 12.5 13.3333 12.1269 13.3333 11.6666ZM5.41663 15C4.36708 15 3.33329 16.0112 3.33329 17.5C3.33329 17.9602 2.9602 18.3333 2.49996 18.3333C2.03972 18.3333 1.66663 17.9602 1.66663 17.5C1.66663 15.3068 3.24451 13.3333 5.41663 13.3333H11.25C13.4221 13.3333 15 15.3068 15 17.5C15 17.9602 14.6269 18.3333 14.1666 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 16.0112 12.2995 15 11.25 15H5.41663Z" fill="white"/>
</svg>
                      </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </div>
    </div>                  
                    </TabContent>
                    <TabContent id="tab2" activeTab={activeTab}>
                    <div className="">
      {/* <div>
        <h2 className=" text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Inquiries</h2>
      </div> */}
      <div className=" flex flex-col md:flex-row ">
        <div className=" w-full max-h-[650px] h-fit ">
          <table className="table-auto border-spacing-0 border-collapse w-full border-0">
            <thead id="table_fixed">
               <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#12B28C] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
                <th className="px-[1.6rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Sr No.</p>
                </th>
                <th className="px-[1.5rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Name Of Client</p>
                </th>
                <th className="px-[2.1rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Mobile No</p>
                </th>
                <th className="px-[4.8rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Email id</p>
                </th>
                <th className="px-[2.4rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Access</p>
                </th>
                <th className="text-center  px-[3.1rem] py-4 whitespace-nowrap">
                  <p className="font-semibold bg-white  px-2  text-black">Shot By</p>
                </th>
              </tr>
            </thead>
            <tbody id="contain">
              {TableDataSecond.map((item, index) => (
                <tr
                  id="table_scroll"
                  className="text-sm bg-[#F5F5F5] h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
                  key={index}
                >
                  <td className="px-[3rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.srno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2.2rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.noc}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2.2rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.mno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.eid}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.7rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.rby}
                      </div>

                    </div>
                  </td>
                  <td className="px-[2rem] whitespace-nowrap gap-x-4 flex flex-row justify-center items-center py-4 ">
                    <div className="bg-[#12B28C] px-3 py-2 ">
                      <div className="text-white font-inter text-sm not-italic font-semibold leading-[normal]">
                        {item.sby}
                      </div>
                    </div>
                    <div className="bg-black px-2 py-1.5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M8.33329 3.33329C6.49234 3.33329 4.99996 4.82568 4.99996 6.66663C4.99996 8.50757 6.49234 9.99996 8.33329 9.99996C10.1742 9.99996 11.6666 8.50757 11.6666 6.66663C11.6666 4.82568 10.1742 3.33329 8.33329 3.33329ZM3.33329 6.66663C3.33329 3.9052 5.57187 1.66663 8.33329 1.66663C11.0947 1.66663 13.3333 3.9052 13.3333 6.66663C13.3333 9.42805 11.0947 11.6666 8.33329 11.6666C5.57187 11.6666 3.33329 9.42805 3.33329 6.66663ZM13.3333 11.6666C13.3333 11.2064 13.7064 10.8333 14.1666 10.8333H17.5C17.9602 10.8333 18.3333 11.2064 18.3333 11.6666C18.3333 12.1269 17.9602 12.5 17.5 12.5H14.1666C13.7064 12.5 13.3333 12.1269 13.3333 11.6666ZM5.41663 15C4.36708 15 3.33329 16.0112 3.33329 17.5C3.33329 17.9602 2.9602 18.3333 2.49996 18.3333C2.03972 18.3333 1.66663 17.9602 1.66663 17.5C1.66663 15.3068 3.24451 13.3333 5.41663 13.3333H11.25C13.4221 13.3333 15 15.3068 15 17.5C15 17.9602 14.6269 18.3333 14.1666 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 16.0112 12.2995 15 11.25 15H5.41663Z" fill="white"/>
</svg>
                      </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
                    </TabContent>
                    <TabContent id="tab3" activeTab={activeTab}>
                    <div className="">
      {/* <div>
        <h2 className=" text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Inquiries</h2>
      </div> */}
      <div className=" flex flex-col md:flex-row ">
        <div className=" w-full max-h-[650px] h-fit ">
          <table className="table-auto border-spacing-0 border-collapse w-full border-0">
            <thead id="table_fixed">
               <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#12B28C] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
                <th className="px-[1.7rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Sr No.</p>
                </th>
                <th className="px-[1.6rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Name Of Client</p>
                </th>
                <th className="px-[2rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Mobile No</p>
                </th>
                <th className="px-[5.3rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Email id</p>
                </th>
                <th className="px-[1.4rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Reference By</p>
                </th>
                <th className="text-center  px-[3rem] py-4 whitespace-nowrap">
                  <p className="font-semibold bg-white  px-2  text-black">Shot By</p>
                </th>
              </tr>
            </thead>
            <tbody id="contain">
              {TableDataThird.map((item, index) => (
                <tr
                  id="table_scroll"
                  className="text-sm bg-[#F5F5F5] h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
                  key={index}
                >
                  <td className="px-[2.5rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.srno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.9rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.noc}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.mno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2.1rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.eid}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.8rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.rby}
                      </div>

                    </div>
                  </td>
                  <td className="px-[1.9rem] whitespace-nowrap gap-x-4 flex flex-row justify-center items-center py-4 ">
                    <div className="bg-[#12B28C] px-3 py-2 ">
                      <div className="text-white font-inter text-sm not-italic font-semibold leading-[normal]">
                        {item.sby}
                      </div>
                    </div>
                   <div  className="bg-[#FF0000] px-2 py-1.5 ">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6H18.9897C18.9959 5.99994 19.0021 5.99994 19.0083 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H19.9311L19.0638 20.1425C18.989 21.1891 18.1182 22 17.0689 22H6.93112C5.88184 22 5.01096 21.1891 4.9362 20.1425L4.06888 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H4.99174C4.99795 5.99994 5.00414 5.99994 5.01032 6H7V4ZM9 6H15V4H9V6ZM6.07398 8L6.93112 20H17.0689L17.926 8H6.07398ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z" fill="white"/>
</svg>                      </div>
                   {/* <div onClick={() => handleDelete(user.id)} className="bg-[#FF0000] px-2 py-1.5 ">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6H18.9897C18.9959 5.99994 19.0021 5.99994 19.0083 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H19.9311L19.0638 20.1425C18.989 21.1891 18.1182 22 17.0689 22H6.93112C5.88184 22 5.01096 21.1891 4.9362 20.1425L4.06888 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H4.99174C4.99795 5.99994 5.00414 5.99994 5.01032 6H7V4ZM9 6H15V4H9V6ZM6.07398 8L6.93112 20H17.0689L17.926 8H6.07398ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z" fill="white"/>
</svg>                      </div> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
                    </TabContent>               
          </div>
     )
}

export default Users;
// import React from "react";
// import Sidebar from "../Sidebar/Sidebar";

// const DashboardVatsal = () => {
  // const TableData = [
  //   {
  //     srno: "1.",
  //     noc: "kushal shah",
  //     mno: "9586388741",
  //     eid: "Kushal777@gmail.com",
  //     rby: "Vatsal sharma",
  //     sby: "Add to CRM",
  //   },
  //   {
  //     srno: "1.",
  //     noc: "kushal shah",
  //     mno: "9586388741",
  //     eid: "Kushal777@gmail.com",
  //     rby: "Vatsal sharma",
  //     sby: "Add to CRM",
  //   },
  //   {
  //     srno: "1.",
  //     noc: "kushal shah",
  //     mno: "9586388741",
  //     eid: "Kushal777@gmail.com",
  //     rby: "Vatsal sharma",
  //     sby: "Add to CRM",
  //   },
  //   {
  //     srno: "1.",
  //     noc: "kushal shah",
  //     mno: "9586388741",
  //     eid: "Kushal777@gmail.com",
  //     rby: "Vatsal sharma",
  //     sby: "Add to CRM",
  //   },
  //   {
  //     srno: "1.",
  //     noc: "kushal shah",
  //     mno: "9586388741",
  //     eid: "Kushal777@gmail.com",
  //     rby: "Vatsal sharma",
  //     sby: "Add to CRM",
  //   },
  //   {
  //     srno: "1.",
  //     noc: "kushal shah",
  //     mno: "9586388741",
  //     eid: "Kushal777@gmail.com",
  //     rby: "Vatsal sharma",
  //     sby: "Add to CRM",
  //   },
  //   {
  //     srno: "1.",
  //     noc: "kushal shah",
  //     mno: "9586388741",
  //     eid: "Kushal777@gmail.com",
  //     rby: "Vatsal sharma", 
  //     sby: "Add to CRM",
  //   },
  // ];
//   return (
//     <div className="">
//       <div>
//         <h2 className=" text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Inquiries</h2>
//       </div>
//       <div className=" flex flex-col md:flex-row   py-5">
//         <div className=" w-full max-h-[650px] h-fit ">
//           <table className="table-auto border-spacing-0 border-collapse w-full border-0">
//             <thead id="table_fixed">
//                <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#12B28C] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
//                 <th className="px-[1.8rem] py-4 whitespace-nowrap">
//                   <p className="font-semibold text-left">Sr No.</p>
//                 </th>
//                 <th className="px-[2rem] py-4 whitespace-nowrap">
//                   <p className="font-semibold text-left">Name Of Client</p>
//                 </th>
//                 <th className="px-[2.5rem] py-4 whitespace-nowrap">
//                   <p className="font-semibold text-left">Mobile No</p>
//                 </th>
//                 <th className="px-[5.8rem] py-4 whitespace-nowrap">
//                   <p className="font-semibold text-left">Email id</p>
//                 </th>
//                 <th className="px-[1.9rem] py-4 whitespace-nowrap">
//                   <p className="font-semibold text-left">Reference By</p>
//                 </th>
//                 <th className="text-center  px-[3rem] py-4 whitespace-nowrap">
//                   <p className="font-semibold bg-white  px-2  text-black">Shot By</p>
//                 </th>
//               </tr>
//             </thead>
//             <tbody id="contain">
//               {TableData.map((item, index) => (
//                 <tr
//                   id="table_scroll"
//                   className="text-sm bg-[#F5F5F5] h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
//                   key={index}
//                 >
//                   <td className="px-[2.6rem] whitespace-nowrap">
//                     <div className="">
//                       <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
//                         {item.srno}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-[2.2rem] whitespace-nowrap">
//                     <div className="">
//                       <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
//                         {item.noc}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-[2.2rem] whitespace-nowrap">
//                     <div className="">
//                       <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
//                         {item.mno}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-[2.3rem] whitespace-nowrap">
//                     <div className="">
//                       <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
//                         {item.eid}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-[2.1rem] whitespace-nowrap">
//                     <div className="">
//                       <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
//                         {item.rby}
//                       </div>

//                     </div>
//                   </td>
//                   <td className="px-[1.9rem] whitespace-nowrap gap-x-4 flex flex-row justify-center items-center py-4 ">
//                     <div className="bg-[#12B28C] px-3 py-2 ">
//                       <div className="text-white font-inter text-sm not-italic font-semibold leading-[normal]">
//                         {item.sby}
//                       </div>
//                     </div>
//                     <div className="bg-black px-2 py-1.5 ">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//   <path d="M8.33329 3.33329C6.49234 3.33329 4.99996 4.82568 4.99996 6.66663C4.99996 8.50757 6.49234 9.99996 8.33329 9.99996C10.1742 9.99996 11.6666 8.50757 11.6666 6.66663C11.6666 4.82568 10.1742 3.33329 8.33329 3.33329ZM3.33329 6.66663C3.33329 3.9052 5.57187 1.66663 8.33329 1.66663C11.0947 1.66663 13.3333 3.9052 13.3333 6.66663C13.3333 9.42805 11.0947 11.6666 8.33329 11.6666C5.57187 11.6666 3.33329 9.42805 3.33329 6.66663ZM13.3333 11.6666C13.3333 11.2064 13.7064 10.8333 14.1666 10.8333H17.5C17.9602 10.8333 18.3333 11.2064 18.3333 11.6666C18.3333 12.1269 17.9602 12.5 17.5 12.5H14.1666C13.7064 12.5 13.3333 12.1269 13.3333 11.6666ZM5.41663 15C4.36708 15 3.33329 16.0112 3.33329 17.5C3.33329 17.9602 2.9602 18.3333 2.49996 18.3333C2.03972 18.3333 1.66663 17.9602 1.66663 17.5C1.66663 15.3068 3.24451 13.3333 5.41663 13.3333H11.25C13.4221 13.3333 15 15.3068 15 17.5C15 17.9602 14.6269 18.3333 14.1666 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 16.0112 12.2995 15 11.25 15H5.41663Z" fill="white"/>
// </svg>
//                       </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
       
//       </div>
//     </div>
//   );
// };

// export default DashboardVatsal;
