import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import HamburgNavbar from './components/HamburgNavbar';
import Maps from "./components/Maps";


function CookDashboard() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  
  
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <><HamburgNavbar setIsOpen={setIsOpen}/> 
      <Container id='cookdash'>
          <Maps id="googleMap" center={{ lat: 37.7749, lng: -122.4194 }} zoom={11}/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Tabs>
            <TabList>
              <Tab>Orders</Tab>
              <Tab>Menu</Tab>
            </TabList>

            <TabPanel>
              <h3 id='cookDashOrders'>George Orwell - 31/03/23</h3>
              <h3 id='cookDashOrders'>Daniel Testings - 04/04/23</h3>
              <h3 id='cookDashOrders'>William Tries - 05/04/23</h3>
            </TabPanel>
            <TabPanel>
              <h3 id='cookDashOrders'>Vegan Tofu Masala</h3>
              <h3 id='cookDashOrders'>Oats Chilla</h3>
              <h3 id='cookDashOrders'>Briyani</h3>
            </TabPanel>
          </Tabs>
      </Container>
     </>     
  );
};

export default CookDashboard;