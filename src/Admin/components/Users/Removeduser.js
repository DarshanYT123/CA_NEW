import React, { useEffect,useState } from 'react'
import {useLocation} from "react-router-dom"
import fireDb from "../../../firebase"
import { toast } from 'react-toastify';
// import { NavLink } from 'react-router-dom';
// import Navbar from './Navbar';

const Removeduser = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const [data,setData] = useState({});
  
    const onDelete = (id1) => {
      if(
        window.confirm("Are you sure that you wanted to delete that contact ?")
        ){
        fireDb.child(`contacts/${id1}`).remove((err)=> {
          if(err){
          toast.error(err);
        }
        else{
          toast.success("Contact Deleted Successfully");
        }
      })
      }
    }
    const useQuery =() => {
      return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let search = query.get("fullname");
    console.log("search",search);

    useEffect(() => {
      searchData();
    },[search])

    const searchData = () =>{
      fireDb.child("contacts").orderByChild("fullname").equalTo(search).on("value",(snapshot) => {
        if(snapshot.val()) {
          const data = snapshot.val();
          searchData(data);
        }
      })
    }
    useEffect(() => {
      fireDb.child("contacts").on("value",(snapshot)=>{
        if(snapshot.val() !== null){
          setData({...snapshot.val()});
        }
        else{
          setData({});
        }
      })
      return () => {
        setData({});
      }
    },[]);
  
    return(
        <div>
           

             <div className="">
      {/* <div>
        <h2 className=" text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Inquiries</h2>
      </div> */}
      <div className=" flex flex-col md:flex-row ">
      <div className="  max-h-[650px]  overflow-y-auto h-[35rem]  ">
          <table className="table-auto1 text-[0.9em]  m-auto border-collapse font-Montserrat ">
          <thead id="table_fixed">
                <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#12B28C] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
                  {" "}
                  <th className="px-[1.9rem] py-4 whitespace-nowrap">
                    <p className="font-semibold text-left">User No.</p>
                  </th>
                  <th className="px-[1.4rem] py-4 whitespace-nowrap">
                    <p className="font-semibold text-left">Name Of User</p>
                  </th>
                  <th className="px-[2rem] py-4 whitespace-nowrap">
                    <p className="font-semibold text-left">Mobile No</p>
                  </th>
                  <th className="px-[5.3rem] py-4 whitespace-nowrap">
                    <p className="font-s6emibold text-left">Email id</p>
                  </th>
                  <th className="px-[1.6rem] py-4 whitespace-nowrap">
                    <p className="font-semibold text-left">Access</p>
                  </th>
                  <th className="text-center  px-[2.8rem] py-4 whitespace-nowrap">
                    <button className="font-semibold bg-white  px-2  text-black">
                      Shot By
                    </button>
                  </th>
                </tr>
              </thead>
            <tbody>
              {Object.keys(data).map((id1,index) =>{
                return(
                  <tr
                  id={id1}
                  className="text-sm  h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
                  // key={index}
                >
                      <td className="px-[2.5rem] whitespace-nowrap">
                    <div className="">
                      <th className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {index + 1}
                      </th>
                    </div>
                  </td>
                  <td className="px-[2rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">    
                      {data[id1].fullname}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.9rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                      {data[id1].mobileno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2.2rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter truncate text-black text-[16px] not-italic font-medium leading-[normal]">
                      {data[id1].emailid}
                      </div>
                    </div>
                  </td>
                  <td className="px-[2rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                      {localStorage.getItem('Reference By')
                        ? localStorage.getItem('Reference By')
                        : "Vatsal sharma"
                        }
                      </div>

                    </div>
                  </td>
                  <td className="px-[1.8rem] whitespace-nowrap gap-x-4 flex flex-row justify-center items-center py-4 ">
<a href='dashboard/addtocrm'>
                    <div className="bg-[#12B28C] px-3 py-2 ">
                      <button className='text-white font-inter text-sm not-italic font-semibold leading-[normal]'>Recover</button>
</div>
</a>
<div className="bg-[#FF0000] px-2 py-1.5 cursor-pointer" onClick={() => onDelete(id1)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6H18.9897C18.9959 5.99994 19.0021 5.99994 19.0083 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H19.9311L19.0638 20.1425C18.989 21.1891 18.1182 22 17.0689 22H6.93112C5.88184 22 5.01096 21.1891 4.9362 20.1425L4.06888 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H4.99174C4.99795 5.99994 5.00414 5.99994 5.01032 6H7V4ZM9 6H15V4H9V6ZM6.07398 8L6.93112 20H17.0689L17.926 8H6.07398ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z" fill="white"/>
</svg>
</div>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
        </div>
    )
}

export default Removeduser;