import React, { useState, useEffect } from 'react';
import "./Topbar/topbar.css";
import { FaLanguage } from "react-icons/fa";
import axios from 'axios';
import LogoutButton from './LogoutOut';
import { useNavigate, Redirect } from "react-router-dom";

const Topbar = () => {

  const [firstname, setFirstName] = useState("");
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;


  const fetchCookInfo = () => {
    axios.get('http://localhost:5001/cook/cookinfo')
      .then((res) => {
        setFirstName(res.data.firstn);
        setProfile(res.data.profile);
        console.log(res.data.firstn);
      })
      .catch((err) => {
        console.error(err);
        setTimeout(() => {
          fetchCookInfo();
        }, 5000); // Retry after 5 seconds
      });
  }

  useEffect(() => {
    fetchCookInfo();
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Hi {firstname}!</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <FaLanguage />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              {/* <Settings /> */}
            </div>
            <img src={profile} alt="" className="topAvatar" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar;
