import React, { useEffect,useState } from 'react'
import {useLocation} from "react-router-dom"
import fireDb from "../../../firebase"
import { toast } from 'react-toastify';
// import { NavLink } from 'react-router-dom';
// import Navbar from './Navbar';

const Alluser = () => {
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
                      <button className='text-white font-inter text-sm not-italic font-semibold leading-[normal]'>Edit User</button>
</div>
</a>
                    <div className="bg-black px-2 py-1.5 cursor-pointer" onClick={() => onDelete(id1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M8.33329 3.33329C6.49234 3.33329 4.99996 4.82568 4.99996 6.66663C4.99996 8.50757 6.49234 9.99996 8.33329 9.99996C10.1742 9.99996 11.6666 8.50757 11.6666 6.66663C11.6666 4.82568 10.1742 3.33329 8.33329 3.33329ZM3.33329 6.66663C3.33329 3.9052 5.57187 1.66663 8.33329 1.66663C11.0947 1.66663 13.3333 3.9052 13.3333 6.66663C13.3333 9.42805 11.0947 11.6666 8.33329 11.6666C5.57187 11.6666 3.33329 9.42805 3.33329 6.66663ZM13.3333 11.6666C13.3333 11.2064 13.7064 10.8333 14.1666 10.8333H17.5C17.9602 10.8333 18.3333 11.2064 18.3333 11.6666C18.3333 12.1269 17.9602 12.5 17.5 12.5H14.1666C13.7064 12.5 13.3333 12.1269 13.3333 11.6666ZM5.41663 15C4.36708 15 3.33329 16.0112 3.33329 17.5C3.33329 17.9602 2.9602 18.3333 2.49996 18.3333C2.03972 18.3333 1.66663 17.9602 1.66663 17.5C1.66663 15.3068 3.24451 13.3333 5.41663 13.3333H11.25C13.4221 13.3333 15 15.3068 15 17.5C15 17.9602 14.6269 18.3333 14.1666 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 16.0112 12.2995 15 11.25 15H5.41663Z" fill="white"/>
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

export default Alluser;