
import {Link} from 'react-router-dom';
import BackButton from './components/BackButton';


const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for registering
    const code1 = document.getElementById("verifyCode1").value;
    const code2 = document.getElementById("verifyCode2").value;
    const code3 = document.getElementById("verifyCode3").value;
    const code4 = document.getElementById("verifyCode4").value;
    const enteredCode = code1 + code2 + code3 + code4;

    if (enteredCode === "1234") {
        // submit logic
        window.location.href = "/registerprofile";
    } else {
        alert("Incorrect code, please try again.");
    }

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
                    <input id="verifyCode1" type="text" maxLength={1} onChange={e => document.getElementById("verifyCode2").focus()}required/>
                </div>
                <div>
                    <input id="verifyCode2" type="text" maxLength={1} onChange={e => document.getElementById("verifyCode3").focus()} required/>
                </div>
                <div>
                    <input id="verifyCode3" type="text" maxLength={1} onChange={e => document.getElementById("verifyCode4").focus()} required/>
                </div>
                <div>
                    <input id="verifyCode4" type="text" maxLength={1} required/>
                </div>
            </div>
            <br/>
            <br />
            <br />
            <button className='btn' id="resendBtn">Resend Code</button>
            <h4>Can't find it? Please check your spam folder.</h4>
            <br />
            <br />
            <button className='btn' id="verifyBtn" type="submit">Verify Code</button>
            <br />
            <br />
            
        </form>
        </>
    );
}
export default VerifyPage;