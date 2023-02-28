import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import AdminButtons from "./components/Admin/AdminButtons";
// import OpenCategory from "./components/Admin/OpenCategory";

const SampleAdminDashboard = () => {

    return(
        <>
        <Navbar />
        <AdminButtons />
        {/* <OpenCategory /> */}
        </>
    )

}

export default SampleAdminDashboard;