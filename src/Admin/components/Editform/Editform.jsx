import React, { useState, useEffect } from "react";
import { dashboardMainClass } from "../../lib/constants/classes";
// import Form from "../Editform/Forms";
import TabNavItem from "../TabNavItem/PageTabNavItem";
import TabContent from "../TabContent/PageTabContent";
import Services from "./Services";
import Dropdown from "./Dropdown";
import fireDb from "../../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Forms from "../Editform/Forms";

const Editform = () => {
  useEffect(() => {
    document.title = "CA | Edit Form";
    document.getElementById("header_title").innerHTML = "Edit Form";

  });

  
  // use to display title and header title
  const [activeTab, setActiveTab] = useState("tab1");
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  const history = useNavigate();

  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);
  const onDelete = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
      fireDb.child(`contacts/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contact Deleted Successfully");
        }
      });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    history(`/latest?fullname=${search}`);
  };

  return (
    <div className={dashboardMainClass}>
      {/* This components are display to data on dashboard form ./dash_components/ */}
      <div>
        <h2 className="py-1 px-2 text-black text-[16px] font-inter not-italic font-medium leading-[normal]">
          Inquiry Form
        </h2>
      </div>
      <div className="w-[99.2%] pl-2 ">
        <ul className="flex items-center bg-white px-3">
          <TabNavItem
            title="Edit Form"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Edit Services"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Edit Drop Down"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>

        <TabContent id="tab1" activeTab={activeTab}>
          <Forms />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <Services />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Dropdown />
        </TabContent>
      </div>{" "}
    </div>
  );
};

export default Editform;
