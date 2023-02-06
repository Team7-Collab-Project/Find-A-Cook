import Button from './components/Button'
import { Link} from 'react-router-dom'
import { useState } from 'react';


const LandingPage = () => {
    const [currentPage, setCurrentPage] = useState('landing');
    return (   
        <div>
            <br></br>
            <img id="logo" alt="FindaCook logo" src="./images/logo-new-edit-01.png"/>
            <div id="btnGroup">
                    <Link style={{textDecoration: 'none'}} className="link" to="/login"><Button id="loginBtn" text='Login' /></Link>
                    <Link style={{textDecoration: 'none'}} className="link" to="/register"><Button id="RegBtn" text='Register' /></Link>
                    <Link style={{textDecoration: 'none'}} className="link" to="/viewcooks"><Button id="guestBtn" text='Continue as Guest' /> </Link>
            </div>
        </div>
    )
}
export default LandingPage