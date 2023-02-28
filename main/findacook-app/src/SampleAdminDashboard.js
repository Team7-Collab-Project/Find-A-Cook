import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import AdminButtons from "./components/Admin/AdminButtons";
import AdminBody from "./components/Admin/AdminBody";

import { useDispatch } from "react-redux";
import { getCategories } from "./redux/actions/categoryActions";
import { getProducts } from "./redux/actions/productActions";

const SampleAdminDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return(
        <>
        <Navbar />
        <AdminButtons />
        <AdminBody />
        {/* <OpenCategory /> */}
        </>
    )

}

export default SampleAdminDashboard;