import Button from './components/Button'
import { Link} from 'react-router-dom'
import { useState } from 'react';
import LandingNavbar from './components/Navbar/LandingNavbar'
import Footer from './components/Footer/Footer';
import AboutSection from './AboutSection';
import InfoSection from './InfoSection';


const LandingPage = () => {
    const [currentPage, setCurrentPage] = useState('landing');
    return (   
        // <div>
        //     <br></br>
        //     <img id="logo" alt="FindaCook logo" src="./images/logo-new-edit-01.png"/>
        //     <div id="btnGroup">
        //             <Link style={{textDecoration: 'none'}} className="link" to="/login"><Button id="loginBtn" text='Login' /></Link>
        //             <Link style={{textDecoration: 'none'}} className="link" to="/register"><Button id="RegBtn" text='Register' /></Link>
        //             <Link style={{textDecoration: 'none'}} className="link" to="/cookdashboard"><Button id="guestBtn" text='Continue as Guest' /> </Link>
        //     </div>
        // </div>

        <div className='home-container'>
            <LandingNavbar />
            <div className='home-banner-container'>
                <div className='home-bannerImage-container'>
                   <img className='landingImg' src='./images/background-image.png' /> 
                </div>
                <div className='home-text-section'>
                    <h1 className='primary-heading'>
                    Elevate your dining experience with a private cook at your fingertips
                    </h1>
                    <p className='primary-text'>
                    Skip the restaurant crowds and enjoy personalized cuisine with the Find A Cook app.
                    </p>
                </div>
                <div className='home-image-container'>
                <img className='landingImg' src='./images/image.png' /> 
                </div>
                
            </div>

           
            <AboutSection />
            <InfoSection />
            <Footer />

        </div>
    )
}
export default LandingPage