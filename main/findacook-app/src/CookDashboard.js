import React from 'react';
//import BackButton from './components/BackButton';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import HamburgNavbar from './components/HamburgNavbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
//import Maps from './components/Maps';
import {
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";
import Schedule from './components/Schedule';
import Navbar from './components/Navbar/Navbar';


function CookDashboard() {
  return (
    <><Navbar />
      <div id='cookdash'>
      {/*<Maps center={{ lat: 37.7749, lng: -122.4194 }} zoom={11}/>*/}
        <div><h1>Dashboard</h1></div>
        <Container id="dashboardBG">
          <Row>
            <Col xs={3}>
              <div id='cookimgdiv' class='col-3'>
                <Image
                  id="profileAvater"
                  style={{ width: "280px", height: "280px" }}
                  src="./images/cookimg.jpg"
                />
              </div>
            </Col>
            <Col xs={9}>
              
              <div id='cookname'>
                <h2>Name</h2>
              </div>
              <div id='bio'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </Col>
            </Row>
            </Container>

          <Tabs>
            <TabList>
              <Tab>Bookings</Tab>
              <Tab>Menu</Tab>
            </TabList>
            <TabPanel className='tablist'>
              <h2>Bookings</h2>
              <Schedule />
            </TabPanel>
            <TabPanel className='tablist'>
              <h2>Menu list</h2>
              <List>
                <ListItem disablePadding className="ListItem">
                    <ListItemButton className="ListItemButton">
                        <table>
                            <tr>
                                <td><img alt="tikka" src='./images/tikka.jpg'/></td>
                                <td><h2>Chicken Tikka Masala</h2></td>
                                <td><h2>Main Course</h2></td>
                                <td><h2>€29.99</h2></td>
                            </tr>
                        </table>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding className="ListItem">
                    <ListItemButton className="ListItemButton">
                        <table>
                            <tr>
                                <td><img alt="korma" src='./images/korma.jpg'/></td>
                                <td><h2>Chicken Korma</h2></td>
                                <td><h2>Main Course</h2></td>
                                <td><h2>€29.99</h2></td>
                            </tr>
                        </table>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding className="ListItem">
                    <ListItemButton className="ListItemButton">
                        <table>
                            <tr>
                                <td><img alt="pekora" src='./images/pakora.jpg'/></td>
                                <td><h2>Chicken Pakora</h2></td>
                                <td><h2>Starter</h2></td>
                                <td><h2>€14.99</h2></td>
                            </tr>
                        </table>
                    </ListItemButton>
                </ListItem>
                </List>
            </TabPanel>
          </Tabs>
      </div>
     </>     
  );
}

export default CookDashboard;