import React from 'react';
import Homepage from './components/Homepage'
import Navbar from './components/Navbar/Navbar';

import { useSelector } from 'react-redux';

const Home = () => {
    

    return(
        <>
        <Navbar />
        <Homepage />


        </>
    );
}

export default Home