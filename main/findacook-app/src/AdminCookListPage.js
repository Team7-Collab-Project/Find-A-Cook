import React from "react";
import AdminCookDisplay from "./components/AdminCookDisplay/AdminCookDisplay";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/AdminSidebar/Sidebar";

const AdminCookListPage = () => {
  return (
    <>
      <Topbar />
      <div className="adminDashContainer">
      <Sidebar />
      <AdminCookDisplay />
      </div>
    </>
  );
};

export default AdminCookListPage;
