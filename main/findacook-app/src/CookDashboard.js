import React, {useState} from 'react';
import BackButton from './components/BackButton';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




function CookDashboard() {


  const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

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
        <><BackButton />
        <div id='cookdash'>
            <div><h1>Dashboard</h1></div>
                <div id='cookimgdiv'>
                    <img src="./images/cookimg.jpg" alt="cook" id='cookdashimg' align='left'></img>
                    <div id='profileimageoverlay'>
                        <label class='uploadbutton' id="profilepictureupload">
                            <input type='file' name='file' onChange={changeHandler} />
                            <div id='changeprofileimagetext'>Change image</div>
                        </label>
                    </div>
                </div>
                <div id='cookname'>
                    Cook Name
                </div>
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