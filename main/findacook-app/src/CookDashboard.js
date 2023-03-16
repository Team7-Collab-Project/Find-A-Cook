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



function CookDashboard() {
  return (
    <>

    <Topbar />
    <Sidebar />

    <section class="dashboard">

    <div class="row">
            <div class="col-xl-4">
              <div class="card-box">
                <h4 class="header-title mt-0">Personal Information</h4>
                <div class="panel-body">
                  <p class="text-muted font-13">
                    Hye, Im Soeng Souy residing in this beautiful world. I
                    create websites and mobile apps with great UX and UI design.
                    I have done work with big companies like Nokia, Google and
                    Yahoo. Meet me or Contact me for any queries. One Extra line
                    for filling space. Fill as many you want.
                  </p>
                  <hr />
                  <div class="text-left">
                    <p class="text-muted font-13">
                      <strong>Full Name :</strong>{" "}
                      <span class="m-l-15">Soeng Souy</span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Mobile :</strong>
                      <span class="m-l-15">(+885) 966686372</span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Email :</strong>{" "}
                      <span class="m-l-15">soengsouy@gmail.com</span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Location :</strong> <span class="m-l-15">KH</span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Cuisine(s) :</strong>{" "}
                      <span class="m-l-5">
                        <span
                          class="flag-icon flag-icon-us m-r-5 m-t-0"
                          title="us"
                        ></span>
                        <span>English</span>{" "}
                      </span>
                      <span class="m-l-5">
                        <span
                          class="flag-icon flag-icon-de m-r-5"
                          title="de"
                        ></span>
                        <span>German</span>{" "}
                      </span>
                      <span class="m-l-5">
                        <span
                          class="flag-icon flag-icon-es m-r-5"
                          title="es"
                        ></span>
                        <span>Spanish</span>{" "}
                      </span>
                      <span class="m-l-5">
                        <span
                          class="flag-icon flag-icon-fr m-r-5"
                          title="fr"
                        ></span>
                        <span>French</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-8">
              <div class="row">
                <div class="col-sm-4">
                  <div className="cook-img-container">
                    <div className="cook-dash-img">
                      <img src="../images/cook1.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </section>


{/* CUSTOMER VIEW */}

      {/* <Navbar />

      <div class="test-container">
        <div class="profile-picture">
          <img src="../images/cook1.jpg" alt="Profile Picture" />
        </div>
        <div class="profile-info">
          <h2>Jen Smyth</h2>
          <div class="credentials">
				<p>Verified Cook</p>
				<p>Food Safety Cert</p> 
				<p><img src='../images/rating.jpg' id="rating-img"/>(67 reviews)</p>
			</div>
          <p>Whether you're seeking healthy, plant-based meals, indulgent comfort food, or something in between, Jen is the private cook to turn to for exceptional cuisine that elevates every dining experience.</p>
          <div class="social-media">
            <p>Share Jen's Profile with your friends and family</p>
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
          </div>
          <hr className="yoylo" />
          <div className="yesOO">
          <h3>Jen's Popular Dishes</h3>
          <div class="product-section">
				<div class="product-card">

					<img src="../images/tikka.jpg" alt="Product Image" />
					<div class="product-info">
						<h3>Product Name</h3>
						<p>Price: €19.99</p>
					</div>
          <div class="user-pic">
    <img src="../images/cook1.jpg" alt="User Profile Picture" />
  </div>
				</div>
				<div class="product-card">
					<img src="../images/pie.jpg" alt="Product Image" />
					<div class="product-info">
						<h3>Product Name</h3>
						<p>Price: €29.99</p>
					</div>
				</div>
				<div class="product-card">
					<img src="../images/gnocchi.jpg" alt="Product Image" />
					<div class="product-info">
						<h3>Product Name</h3>
						<p>Price: €39.99</p>
					</div>
				</div>
				<div class="product-card">
					<img src="../images/pakora.jpg" alt="Product Image" />
					<div class="product-info">
						<h3>Product Name</h3>
						<p>Price: €49.99</p>
					</div>
				</div>
				<div class="product-card">
					<img src="../images/bao.jpg" alt="Product Image" />
					<div class="product-info">
						<h3>Product Name</h3>
						<p>Price: €59.99</p>
					</div>
				</div>
				<div class="product-card">
					<img src="../images/burger.jpg" alt="Product Image" />
					<div class="product-info">
						<h3>Product Name</h3>
						<p>Price: €69.99</p>
            </div>
				</div>
			</div>
		</div>
	</div>
  
  </div> */}


    </>
  );
}

export default CookDashboard;
