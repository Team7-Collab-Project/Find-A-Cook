import React from 'react';
import BackButton from './components/BackButton';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function CookDashboard() {


    return (
        <><BackButton />
        <div id='cookdash'>
            <div><h1>Dashboard</h1></div>
                <div id='cookimgdiv'>
                    <img src="./images/cookimg.jpg" alt="cook" id='cookdashimg' align='left'></img>
                    <div id='profileimageoverlay'>
                        <div id='changeprofileimagetext'>Change image</div>
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