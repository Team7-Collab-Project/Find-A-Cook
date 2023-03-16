import React, { useEffect } from "react";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/AdminSidebar/Sidebar";
import CategoryButton from "./components/Admin/CategoryButton";
import AdminBody from "./components/Admin/AdminBody";
import { useDispatch } from "react-redux";
import { getCategories } from "./redux/actions/categoryActions";
import OpenCategory from "./components/Admin/OpenCategory";

const CategoriesPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return(
        <>
        <Topbar />
        <Sidebar />
        <CategoryButton />
        <OpenCategory />
               
        </>
    )
}

export default CategoriesPage;