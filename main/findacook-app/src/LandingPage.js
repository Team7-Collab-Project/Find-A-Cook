import Button from './components/Button'
import { Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';


const LandingPage = () => {
    const [currentPage, setCurrentPage] = useState('landing');
    return (   
        <div>
            <br></br>
            <img id="logo" src="./images/logo-new-edit-01.png"/>
            <div id="btnGroup">
                    <Link style={{textDecoration: 'none'}} to="/login"><Button id="loginBtn" text='Login' /></Link>
                    <Link style={{textDecoration: 'none'}} to="/register"><Button id="RegBtn" text='Register' /></Link>
                    <Link style={{textDecoration: 'none'}} to="/cookdashboard"><Button id="guestBtn" text='Continue as Guest' /> </Link>
            </div>
        </div>
    )
}
export default LandingPage