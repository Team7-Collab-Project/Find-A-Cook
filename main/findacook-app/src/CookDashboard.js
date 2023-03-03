import React, {useState, useRef, useEffect} from 'react';
//import BackButton from './components/BackButton';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import HamburgNavbar from './components/HamburgNavbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Maps from './components/Maps';
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Badge,
  Form,
  FormControl,
} from "react-bootstrap";


function CookDashboard() {


  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [clicksOutside, setClicksOutside] = useState(0);
  const navbarRef = React.useRef(null);

  const handleClickOutside = event => {
    if (isOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
      setClicksOutside(clicksOutside + 1);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  React.useEffect(() => {
    if (clicksOutside > 0) {
      setIsOpen(false);
      setClicksOutside(0);
    }
  }, [clicksOutside]);

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleSubmission = () => {
    const formData = new FormData();
    formData.append('File', selectedFile);
      fetch(
        'enter URL here',
			  {
				  method: 'POST',
				  body: formData,
			  }
		  )
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

  return (
    <><HamburgNavbar setIsOpen={setIsOpen}/>
      <div id='cookdash' className={`${isOpen ? 'sidebar-open' : ''}`}>
      <Container id="dashboardBG">
        <Maps id="map" center={{ lat: 37.7749, lng: -122.4194 }} zoom={11}/>
      </Container>
        {/* <div><h1>Dashboard</h1></div>
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
            </Container> */}

          <Tabs>
            <TabList>
              <Tab>Orders</Tab>
              <Tab>Menu</Tab>
            </TabList>
            <TabPanel className='tablist'>
              <h2>Orders List</h2>
              <List>
                <ListItem disablePadding className="ListItem">
                    <ListItemButton className="ListItemButton">
                        <table>
                            <tr>
                                <td><h2>John Brown</h2></td>
                                <td><h4>259 Greenacres, Marshes Lower, Dundalk, Co. Louth, A91 D8X3</h4></td>
                                <td><h4>Chicken Tikka Masala, Chicken Pakora</h4></td>
                                <td><h2>24/02/22 18:00</h2></td>
                            </tr>
                        </table>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding className="ListItem">
                    <ListItemButton className="ListItemButton">
                        <table>
                            <tr>
                                <td><h2>Hannah O'Reilly</h2></td>
                                <td><h4>4 Drive 2, Muirhevnamore, Dundalk, Co. Louth, A91 P2X6</h4></td>
                                <td><h4>Chicken Korma, Chicken Pakora</h4></td>
                                <td><h2>27/02/22 16:30</h2></td>
                            </tr>
                        </table>
                    </ListItemButton>
                </ListItem>
                </List>
            </TabPanel>
            <TabPanel className='tablist'>
              <h2>Menu list</h2>
              <List>
                <ListItem disablePadding className="ListItem">
                    <ListItemButton className="ListItemButton">
                        <table>
                            <tr>
                                <td><img src='./images/tikka.jpg'/></td>
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
                                <td><img src='./images/korma.jpg'/></td>
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
                                <td><img src='./images/pakora.jpg'/></td>
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