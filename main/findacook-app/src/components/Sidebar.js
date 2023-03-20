import { useState } from "react";
import "./AdminSidebar/Sidebar.css"

// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
// import 'react-pro-sidebar/dist/css/styles.css'

const Sidebar = () => {
    // const [isCollapsed, setIsCollapsed] = useState(false);
    // const [selected, setSelected] = useState('Dashboard');


    return (
<>

<aside className="admin-sidenav">


        <div class="menu-items">
            <ul class="nav-links">
                <li><a href="/cookdashboard">
                    <span class="link-name">🧑🏻‍🍳 Dashboard</span>
                </a></li>
                <li><a href="/bookings">
                    <span class="link-name">📖 View Bookings</span>
                </a></li>
                <li><a href="/menu">
                    <span class="link-name">🍔 View Menu</span>
                </a></li>
            </ul>
            
            <ul class="logout-mode">
                <li><a href="/testapp">
                    <i class="uil uil-signout"></i>
                    <span class="link-name">Settings</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-signout"></i>
                    <span class="link-name">Logout</span>
                </a></li>
            </ul>
        </div>
    </aside>

</>

    )

}

export default Sidebar