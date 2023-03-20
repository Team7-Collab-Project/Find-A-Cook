import React, {useState} from 'react';
import Box from '@mui/material/Box';
import BackButton from './components/BackButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
// import "./components/CSS/"
// import "./components/CSS/review.css";
import { useNavigate } from "react-router-dom";
import LandingNavbar from './components/Navbar/LandingNavbar'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import AboutSection from './AboutSection';
import InfoSection from './InfoSection';

function ViewCooks() {
    const navigate = useNavigate();


    function handleClickJoane() {
        navigate("/joanemenu");
      }

      function handleClickMaurice() {
        navigate("/mauricemenu");
      }
      function handleClickJulian() {
        navigate("/julianmenu");
      }
      function handleClickMort() {
        navigate("/mortmenu");
      }
    return (
        <>
        <Navbar/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        {/* <div id='viewcooksBG'> */}
            <br />
            {/* <h1>List of Cooks</h1> */}
            {/* <div id='cooklist'> */}
                {/* <List>
                <ListItem disablePadding className="ListItem">
                    <ListItemButton className="ListItemButton">
                        <table>
                            <tr>
                                <td rowspan="3"><img src='./images/cook1.jpg'/></td>
                                <td>Joane</td>
                            </tr>

                            <tr>
                                <td>Slavic</td>
                            </tr>
                            <tr>
                                <td>Rating</td>
                            </tr>
                        </table>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <table>
                            <tr>
                                <td><img src='./images/cook2.jpg'/></td>
                                <td><h2>Fahad</h2></td>
                                <td><h2>Indian</h2></td>
                                <td><h2>View Menu</h2></td>
                            </tr>
                        </table>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <table>
                            <tr>
                                <td><img src='./images/cook3.png'/></td>
                                <td><h2>David</h2></td>
                                <td><h2>Mexican</h2></td>
                                <td><h2>View Menu</h2></td>
                            </tr>
                            </table>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <table>
                            <tr>
                                <td><img src='./images/cook5.png'/></td>
                                <td><h2>Niamh</h2></td>
                                <td><h2>Italian</h2></td>
                                <td><h2>View Menu</h2></td>
                            </tr>
                            </table>
                    </ListItemButton>
                </ListItem>
                </List> */}



            {/* </div> */}
        {/* </div> */}


        {/* new table */}

<div class="cooksList1">

    <div class="cooksListTableWrapper">
        {/* <table class="cooksListTable">
  
  <tr>
    <td><img class="cookImage"src='./images/cook1.jpg'/></td>
    <tr>
        
    </tr>
    <td>Joane</td>
    <td>Slavic</td>
  </tr>
  <tr>
    <td><img class="cookImage" src='./images/cook2.jpg'/></td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table> */}


<table class="cooksListTable">
<tbody>
<tr>
<td class="cookImageTd"><div class="cookImageDiv"><img class="cookImage"src='./images/cook1.jpg'/></div></td>
<td>
    <p>Joane</p>
    <p>Slavic</p>
    <p class="starRatings2"><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
</td>
<td><button onClick={handleClickJoane}>View Menu</button></td>
</tr>
<tr>
<td class="cookImageTd"><div class="cookImageDiv"><img class="cookImage"src='./images/cook2.jpg'/></div></td>
<td>
    <p>Maurice</p>
    <p>Italian</p>
    <p class="starRatings2"><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
</td>
<td><button onClick={handleClickMaurice}>View Menu</button></td>
</tr>
<tr>
<td class="cookImageTd"><div class="cookImageDiv"><img class="cookImage"src='./images/cook3.png'/></div></td>
<td>
    <p>Julian</p>
    <p>Spanish</p>
    <p class="starRatings2"><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
</td>
<td><button onClick={handleClickJulian}>View Menu</button></td>
</tr>
<tr>
<td class="cookImageTd"><div class="cookImageDiv"><img class="cookImage"src='./images/cook5.png'/></div></td>
<td>
    <p>Mort</p>
    <p>Outermongolian</p>
    <p class="starRatings2"><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
</td>
<td><button onClick={handleClickMort}>View Menu</button></td>
</tr>
</tbody>
</table>

</div>

</div>


            </>
        
    );
}

export default ViewCooks;