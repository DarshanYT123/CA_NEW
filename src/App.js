import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inquiry from "./Admin/components/Inquiry/Inquiry";
import Inquiryfrom from "./Admin/components/Inquiry/Inquiryfrom";

// CLIENT Dashboard
import Dashboard from "./Admin/components/Dashboard/Dashboard";
import EditForm from "./Admin/components/Editform/Editform";
import Sidebar from "./Admin/components/Sidebar/Sidebar";
import Header from "./Admin/components/shared/Header.jsx";
import Usermain from "./Admin/components/Users/Usermain";
import AddNewUser from "./Admin/components/Users/AddNewUser";
import UserDetails from "./Admin/components/Users/UserDetails";
import Clientdetails from "./Admin/components/Dashboard/Clientdetails";
import Latest from "./Admin/components/Dashboard/Latest";
import Solved from "./Admin/components/Dashboard/Solved";
import Moved from "./Admin/components/Dashboard/Moved";
import Removed from "./Admin/components/Dashboard/Removed";


import Addtocrm from "./Admin/components/Addtocrm/Addtocrm";
// import Headernav from "./Admin/components/Editform/Headernav";
// import Sidebarnav from "./Admin/components/Editform/Sidebarnav";



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    if (window.location.pathname.toString().includes("dashboard")) {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  });

  return (
    <div className="App">
      <Router>
        {isDashboard ? (
          <>
          <div className="flex flex-row bg-natural-900  h-screen w-screen relative">
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            {/* <Sidebarnav sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}
            <div className="flex-1 pl-0  lg:pl-60 overflow-x-hidden">
              <Header sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
              {/* <Headernav sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> */}
              {/* <Navbar/> */}
              <Routes>
                <Route
                  path="dashboard"
                  element={<Dashboard title="Dashboard" />}
                />
              <Route path="dashboard/latest" element={<Latest title="Latest" />} />
              <Route path="dashboard/solved" element={<Solved title="Solved" />} />
              <Route path="dashboard/moved" element={<Moved title="Moved" />} />
              <Route path="dashboard/removed" element={<Removed title="Removed" />} />
                <Route
                  path="dashboard/clientdetails"
                  element={<Clientdetails title="Dashboard" />}
                />
                <Route
                  path="dashboard/newuser"
                  element={<AddNewUser title="Users" />}
                />
                <Route
                  path="dashboard/userdetails"
                  element={<UserDetails title="Users" />}
                />
                <Route
                  path="/users"
                  element={<Usermain title="Users" />}
                />
                <Route
                  path="/form"
                  element={<EditForm title="Edit Form" />}
                />
                <Route
                  path="dashboard/addtocrm"
                  element={<Addtocrm title="Edit Form" />}
                />
                {/* <Route path="dashboard/tablesubmit" element={<Formsubmit title="Edit Form table" />} /> */}
              </Routes>
            </div>
          </div>
          {/* <div className="flex flex-row bg-natural-900  h-screen w-screen relative">
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
          <div className="flex-1 pl-0  lg:pl-60 overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <Routes>
              <Route
                exact
                path="/dashboardclient"
                element={<DashboardClient title="Dashboard" />}
              />
              <Route path="/addtocrmclient" element={<Addtocrm />} />
            </Routes>
          </div>
        </div> */}
        </>
        ) : (
          <>
            <Routes>
              <Route path="/inquiry" element={<Inquiry />} />
              <Route path="/inquiryfrom" element={<Inquiryfrom />} />
              {/* <Route path="/sidebar" element={<Sidebar />} /> */}
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              {/* <Route path="/dashboard" element={<Dashboardmain />} /> */}
            </Routes>
          </>
        )}
         
      </Router>     
    </div>
  );
}

export default App;
