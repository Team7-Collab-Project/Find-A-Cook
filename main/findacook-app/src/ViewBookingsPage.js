import React, { useState, useRef, useEffect } from "react";
//import BackButton from './components/BackButton';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { FaCheck, FaTwitter } from "react-icons/fa";
import Footer from './components/Footer/Footer';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa"; 
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
//import Maps from './components/Maps';
import Booking from "./components/Booking/Booking";



function ViewBookingsPage() {
  return (
    <>

    <Topbar />
    <Sidebar />

    <section class="dashboard">

    <Booking />

    </section>




    </>
  );
}

export default ViewBookingsPage;
