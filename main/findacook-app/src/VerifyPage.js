
import {Link} from 'react-router-dom';
import BackButton from './components/BackButton';


const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for registering
  };
  
function VerifyPage() {
    return (
        <><BackButton />
        <Link style={{textDecoration: 'none'}} to="/"><img id="loginLogo" alt="FindaCook logo" src="./images/logo-new-edit-01.png"/></Link>
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
            <button className='btn' id="resendBtn">Resend Code</button>
            <h4>Can't find it? Please check your spam folder.</h4>
            <br />
            <br />
            <Link style={{textDecoration: 'none'}} to="/registerprofile"><button className='btn' id="verifyBtn" type="submit">Verify Code</button></Link>
            <br />
            <br />
            
        </form>
        </>
    );
}
export default VerifyPage;