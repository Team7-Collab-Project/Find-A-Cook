import { TextField } from '@mui/material';
import {Link} from 'react-router-dom';
import BackButton from './components/BackButton';

const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for registering
  };
  
function VerifyPage() {
    return (
        <><BackButton />
        <img id="loginLogo" src="./images/logo-new-edit-01.png"/>
        <form onSubmit={handleSubmit}>
            <br />
            <div id='verifyCodes'>
                <div>
                    <TextField className="verifyCodeArea" id="verifyCode1" />
                </div>
                <div>
                    <TextField className="verifyCodeArea" id="verifyCode2" />
                </div>
                <div>
                    <TextField className="verifyCodeArea" id="verifyCode3" />
                </div>
                <div>
                    <TextField className="verifyCodeArea" id="verifyCode4" />
                </div>
            </div>
        </form>
        </>
    );
}
export default VerifyPage;