import React from 'react';
import '../CSS/Style.css'
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return(
        <>
        <div className='footer-wrapper'>
            <div className='footer-section-one'>
                <div className='footer-logo-container'>
                <img className="footerImg" src="../images/logo-new-edit-01.png"/>
                </div>
                <div className='footer-icons'>
                    <BsTwitter />
                    <FaFacebook />
                    <FaInstagram />
                    <FaTiktok />
                </div>
            </div>
            <div className='footer-section-two'>
                <div className='footer-section-columns'>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Testimonials</span>
                </div>
                <div className='footer-section-columns'>
                    <span>089-111-2222</span>
                    <span>support@findacook.com</span>
                    <span>contact@findacook.com</span>
                </div>
                <div className='footer-section-columns'>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;