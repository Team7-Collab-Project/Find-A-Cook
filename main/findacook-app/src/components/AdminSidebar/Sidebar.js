import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaUserCog, FaRegEdit } from "react-icons/fa";


const Sidebar = () => {

    return(
        <>

{/* <div className="admin-sidebar-container">
<aside className="sidenav">
  <ul className="nav-links">
  <li><a href="#">
                    <span class="link-name">🧑🏻‍🍳 Manage Cooks</span>
                </a></li>
                <li><a href="#">
                    <span class="link-name">✏️ Categories</span>
                </a></li>
  </ul>

  <ul class="logout-mode">
                <li><a href="#">
                    <i class="uil uil-signout"></i>
                    <span class="link-name">Logout</span>
                </a></li>

            </ul>
 </aside>
</div> */}





<aside className="admin-sidenav">


        <div class="menu-items">
            <ul class="nav-links">
                <li><a href="/cooklist">
                    <span class="link-name">🧑🏻‍🍳 Manage Cooks</span>
                </a></li>
                <li><a href="/categories">
                    <span class="link-name">✏️ Categories</span>
                </a></li>
            </ul>
            
            <ul class="logout-mode">
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

export default Sidebar;
