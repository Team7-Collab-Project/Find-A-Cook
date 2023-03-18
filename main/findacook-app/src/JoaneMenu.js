
import React, {useState, useRef, useEffect} from 'react';
//import BackButton from './components/BackButton';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import HamburgNavbar from './components/HamburgNavbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
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


function JoaneMenu() {

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
    <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link><HamburgNavbar setIsOpen={setIsOpen}/>
      <div id='cookdash' className={`${isOpen ? 'sidebar-open' : ''}`}>
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
              <Tab>Menu</Tab>
              <Tab>Reviews</Tab>
            </TabList>
            
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

            <TabPanel>

            <table class="cooksListTable" cellspacing="0" >

<tr class="reviewTableRow">
    <div class="reviewHeader">
        <img class="customerImage"src='./images/user1.png'/>
    Joane
    </div>

    <div class="ReviewTableBody">
    <p class="starRatings">
        
        <span class="fa fa-star"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star-half-o"></span>
        <span class="fa fa-star-o"></span></p>

    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

</tr>
<tr class="reviewTableRow">
<div class="reviewHeader">
<img class="customerImage"src='./images/user2.jpeg'/>

    Maurice
    </div>
    <div class="ReviewTableBody">
    <p class="starRatings"><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
<p class="desc">Purus in massa tempor nec. Turpis egestas pretium aenean pharetra magna ac placerat. Adipiscing at in tellus integer feugiat scelerisque. Et tortor consequat id </p>
</div>
</tr>
<tr class="reviewTableRow">
<div class="reviewHeader">
<img class="customerImage"src='./images/user3.jpg'/>

    Julian
    </div>
    <div class="ReviewTableBody">
    <p class="starRatings"><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
<p class="desc">Purus in massa tempor nec. Turpis egestas pretium aenean pharetra magna ac placerat. Adipiscing at in tellus integer feugiat scelerisque. Et tortor consequat id olutpat consequat mauris nunc congue nisi vitae. Auctor eu augue ut lectus arcu bibendum. Porttitor eget dolor morbi non arcu </p>
</div></tr>
<tr class="reviewTableRow">
<div class="reviewHeader">
<img class="customerImage"src='./images/user4.jpg'/>

    MortMenu
    </div>
    <div class="ReviewTableBody">
    <p class="starRatings"><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
<p class="desc">Purus in massa tempor nec. Turpis egestas pretium aenean pharetra magna ac placerat. Adipiscing at in tellus integer feugiat scelerisque. Et tortor consequat id Et tortor consequat id c placerat. Adipiscing at in tellus integer feugiat scelerisque. Et tortor consequat id Et tortor consequatolutpat consequat mauris nunc congue</p>
</div></tr>
</table>
                
            </TabPanel>
          </Tabs>
      </div>
     </>     
  );

}
export default JoaneMenu