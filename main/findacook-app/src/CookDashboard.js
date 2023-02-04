import React, {useState, useRef, useEffect} from 'react';
import BackButton from './components/BackButton';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import HamburgNavbar from './components/HamburgNavbar';

function CookDashboard() {


  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [clicksOutside, setClicksOutside] = useState(0);
  const navbarRef = React.useRef(null);

  const handleClickOutside = event => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
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
        <div><h1>Dashboard</h1></div>
          <div id='cookimgdiv'>
            <img src="./images/cookimg.jpg" alt="cook" id='cookdashimg' align='left' />
              <div id='profileimageoverlay'>
                <label className='uploadbutton' id="profilepictureupload">
                  <input type='file' name='file' onChange={changeHandler} />
                  <div id='changeprofileimagetext'>Change image</div>
                </label>
              </div>
          </div>
          <div id='cookname'>
            Cook Name
          </div>
          <div>BIO Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          <Tabs>
            <TabList>
              <Tab>Orders</Tab>
              <Tab>Menu</Tab>
            </TabList>

            <TabPanel>
              <h2>Orders List</h2>
            </TabPanel>
            <TabPanel>
              <h2>Menu list</h2>
            </TabPanel>
          </Tabs>
      </div>
     </>     
  );
}

export default CookDashboard;