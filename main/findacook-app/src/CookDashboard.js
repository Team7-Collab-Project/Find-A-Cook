import React from 'react';
import BackButton from './components/BackButton';

function CookDashboard() {


    return (
        <><BackButton />
        <div id='cookdash'>
            <div><h1>Dashboard</h1></div>
                <div id='cookimgdiv'>
                    <img src="./images/cookimg.jpg" alt="cook" id='cookdashimg' align='left'></img>
                </div>
                <div id='cookname'>
                    Cook Name
                </div>
            </div>
            </>
    );
}

export default CookDashboard;