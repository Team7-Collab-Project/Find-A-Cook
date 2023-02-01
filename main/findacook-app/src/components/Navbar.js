import React from 'react';
import { useRef } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			{/* <div className='navLogo'>
            <img src="../images/logo-new-edit-01.png"/>
            </div>  */}
            {/* <h3>Find A Cook</h3> */}
            <img src="../images/logo-new-edit-01.png"/>
			<nav ref={navRef}>
				<a href="/#">Placeholder</a>
				<a href="/#">Placeholder</a>
				<a href="/#">Placeholder</a>
				<a href="/#">Placeholder</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar