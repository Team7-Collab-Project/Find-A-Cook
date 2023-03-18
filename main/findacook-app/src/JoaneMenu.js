
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
    <><HamburgNavbar setIsOpen={setIsOpen}/>
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

            <table class="cooksListTable">
<tbody>
<tr>
    <div class="reviewHeader">
        <img class="customerImage"src='./images/user1.png'/>
    Joane
    </div>

    <p class="desc">Purus in massa tempor nec. Turpis egestas pretium aenean pharetra magna ac placerat. Adipiscing at in tellus integer feugiat scelerisque. Et tortor consequat id porta nibh. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Id eu nisl nunc mi ipsum faucibus. Eget lorem dolor sed viverra. Tellus in hac habitasse platea dictumst. Egestas erat imperdiet sed euismod nisi. Facilisi morbi tempus iaculis urna id volutpat lacus. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Ultricies integer quis auctor elit sed vulputate mi.

Volutpat consequat mauris nunc congue nisi vitae. Auctor eu augue ut lectus arcu bibendum. Porttitor eget dolor morbi non arcu risus quis varius quam. Sit amet porttitor eget dolor. Integer feugiat scelerisque varius morbi enim. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Nunc sed blandit libero volutpat sed cras. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.</p>
    <p>
        
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>

h
</tr>
<tr>
<td><img class="customerImage"src='./images/user2.jpeg'/></td>
<td>
    <p>Maurice</p>
    <p>Italian</p>
    <p><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
</td>
<td>eg</td>
</tr>
<tr>
<td><img class="customerImage"src='./images/user3.jpg'/></td>
<td>
    <p>Julian</p>
    <p>Spanish</p>
    <p><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
</td>
<td>fdg</td>
</tr>
<tr>
<td><img class="customerImage"src='./images/user4.jpg'/></td>
<td>
    <p>Mort</p>
    <p>Outermongolian</p>
    <p><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
</td>
<td>rey</td>
</tr>
</tbody>
</table>
                
            </TabPanel>
          </Tabs>
      </div>
     </>     
  );

}
export default JoaneMenu