import { TextField } from '@mui/material';
import {Link} from 'react-router-dom';
import BackButton from './components/BackButton';
import Button from './components/Button'

const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for registering
  };
  
function VerifyPage() {
    return (
        <><BackButton />
        <img id="loginLogo" src="./images/logo-new-edit-01.png"/>
        <form id="verifyForm" onSubmit={handleSubmit}>
            <h1>Verification</h1>
            <br />
            <h2>Verify your email address</h2>
            <h3>Please check your inbox for Verification code sent to your email. Once verified, there's just one more step to complete your profile.</h3>
            <br/>
            <div id='verifyCodes'>
                <div>
                    <input id="verifyCode1" type="text" maxLength={1}/>
                </div>
                <div>
                    <input id="verifyCode2" type="text" maxLength={1}/>
                </div>
                <div>
                    <input id="verifyCode3" type="text" maxLength={1}/>
                </div>
                <div>
                    <input id="verifyCode4" type="text" maxLength={1}/>
                </div>
            </div>
            <br/>
            <br />
            <br />
            <button>Resend Code</button>
            <br/>
            <br />
            <br />
            <button type="submit">Verify Code</button>
            <br />
            <br />
            <h3>Can't find it? Please check your spam folder.</h3>
        </form>
        </>
    );
}
export default VerifyPage;