import React, {  useState,useEffect } from 'react';
import TabNavItem from '../TabNavItem/PageTabNavItem';
import TabContent from '../TabContent/PageTabContent';
import fireDb from "../../../firebase"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
// import Graph from "./dash_components/Graph";
// import History from "./dash_components/History";
// import Recent from "./dash_components/Recent";
// import Total from "./dash_components/Total";
import { dashboardMainClass } from "../../lib/constants/classes";
// import Users from "./Users";
import Activeuser from "./Activeuser";
import Removeduser from './Removeduser';
import Alluser from './Alluser';

const Usermain = () => {
  useEffect(() => {
    document.title = "CA | Users";
    document.getElementById("header_title").innerHTML = "Users";

  });


  // use to display title and header title
  const [activeTab, setActiveTab] = useState("tab1");
  const [search, setSearch] = useState("");
  const [data,setData] = useState({});

  const history = useNavigate();

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
  const onDelete = (id) => {
    if(
      window.confirm("Are you sure that you wanted to delete that contact ?")
      ){
      fireDb.child(`contacts/${id}`).remove((err)=> {
        if(err){
        toast.error(err);
      }
      else{
        toast.success("Contact Deleted Successfully");
      }
    })
    }
  }
  
  const handleSearch = (e) => {
    e.preventDefault();
    history(`/latest?fullname=${search}`)
  }

  return (
    <div className={dashboardMainClass}>
      {/* This components are display to data on dashboard form ./dash_components/ */}
      <div>
        <h2 className="py-1 px-2 text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Users</h2>
      </div>
      <div className='w-[99.2%] pl-2 '>
               <ul className='flex items-center bg-white px-3'>
                    <TabNavItem title="Active" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="All" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="Removed" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <form onSubmit={handleSearch}>
                      <div className=' pl-[30rem] relative flex justify-center items-center '>
                    <input type='text' className='bg-[#F3F3F3] pl-3  py-1.5' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
                   <div className='pl-40 absolute cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98719 0C12.2514 0 15.7083 3.42502 15.7083 7.65C15.7083 9.45606 15.0766 11.1159 14.0202 12.4246L17.1728 15.549C17.5078 15.8809 17.5078 16.4191 17.1728 16.751C16.8635 17.0575 16.3769 17.081 16.0404 16.8218L15.9595 16.751L12.8061 13.6275C11.4853 14.6741 9.81003 15.3 7.98719 15.3C3.72296 15.3 0.266113 11.875 0.266113 7.65C0.266113 3.42502 3.72296 0 7.98719 0ZM7.98719 1.70007C4.67057 1.70007 1.98192 4.36398 1.98192 7.65007C1.98192 10.9362 4.67057 13.6001 7.98719 13.6001C11.3038 13.6001 13.9925 10.9362 13.9925 7.65007C13.9925 4.36398 11.3038 1.70007 7.98719 1.70007Z" fill="#211F3B"/>
</svg>
</div>
                    </div>

                    </form>
                    <div className='pl-2'>
                    <div className=' px-2 py-1.5 bg-[#F3F3F3] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M4.70264 7C4.70264 6.44772 5.15451 6 5.71193 6H19.842C20.3994 6 20.8513 6.44772 20.8513 7C20.8513 7.55228 20.3994 8 19.842 8H5.71193C5.15451 8 4.70264 7.55228 4.70264 7ZM6.72122 12C6.72122 11.4477 7.17309 11 7.73051 11H17.8234C18.3808 11 18.8327 11.4477 18.8327 12C18.8327 12.5523 18.3808 13 17.8234 13H7.73051C7.17309 13 6.72122 12.5523 6.72122 12ZM8.7398 17C8.7398 16.4477 9.19167 16 9.74909 16H15.8048C16.3622 16 16.8141 16.4477 16.8141 17C16.8141 17.5523 16.3622 18 15.8048 18H9.74909C9.19167 18 8.7398 17.5523 8.7398 17Z" fill="#211F3B"/>
</svg>
                    </div>
                    </div> </ul>
               
                    <TabContent id="tab1" activeTab={activeTab}>
                   <Activeuser/>       
                    </TabContent>
                    <TabContent id="tab2" activeTab={activeTab}>
                    <Alluser/>
                    </TabContent>
                    <TabContent id="tab3" activeTab={activeTab}>
                    <Removeduser/>

                    </TabContent>               
          </div>
    </div>
  );
};

export default Usermain;
