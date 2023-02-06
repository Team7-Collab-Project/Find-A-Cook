
import {Link} from 'react-router-dom';
import BackButton from './components/BackButton';
import TermsandConditions from './components/TermsBox';


const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for registering
    window.location.href = "/viewcooks";
  };


  
function TermsPage() {
    return (
        <><BackButton />
        <Link style={{textDecoration: 'none'}} to="/"><img id="loginLogo" alt="FindaCook logo" src="./images/logo-new-edit-01.png"/></Link>
        <form id="termsForm" onSubmit={handleSubmit}>
            <h1>Terms and Conditions</h1>
            <h3>Please read through and accept our Terms and Conditions before your account is finalised.</h3>
            <br />           
            <TermsandConditions submitCode={handleSubmit}/>  
        </form>
        </>
    );
}
export default TermsPage;