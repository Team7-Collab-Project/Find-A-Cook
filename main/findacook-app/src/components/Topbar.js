import React from "react";
import "./Topbar/topbar.css";
import { FaLanguage } from "react-icons/fa";

const Topbar = () => {

    return(
        <>
            <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Hi Soeng!</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {/* <NotificationsNone /> */}
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <FaLanguage />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {/* <Settings /> */}
          </div>
          <img src="../images/admin.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
        </>
    )
}

export default Topbar