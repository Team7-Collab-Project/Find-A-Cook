import { useState } from "react";

// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
// import 'react-pro-sidebar/dist/css/styles.css'

const Sidebar = () => {
    // const [isCollapsed, setIsCollapsed] = useState(false);
    // const [selected, setSelected] = useState('Dashboard');


    return (
<>

<aside class="sidebar">
        <div className="cook-name">
            <div className="cook-profile-pic">
                <img src="../images/cook1.jpg" />
            </div>
            <span className="cook-name-span">Cook Name</span>
        </div>

        <div class="menu-items">
        <ul class="cook-nav-links">
          
        <span class="link-name">My Profile</span>
        </ul>


        <ul class="logout-mode">
                <li><a href="#">
                    <span class="link-name">Logout</span>
                </a></li>
            </ul>
        </div>
</aside>

</>

    )

}

export default Sidebar