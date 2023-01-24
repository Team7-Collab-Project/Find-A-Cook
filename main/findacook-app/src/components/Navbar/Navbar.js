import React from 'react';
import '../CSS/Style.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
    return (
        <div className='divContainer'>
            <div className='divWrapper'>
                <div className='left'>
                    <div className='searchBox'>
                        <input />
                        <FaSearch />
                    </div>
                </div>
                <div className='center'>
                    <div className='navLogo'>
                    <img src="../images/logo-new-edit-01.png"/>
                    </div>
                    </div>
                <div className='right'>
                    <div className='menuCart'>
                    <FaShoppingCart />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar