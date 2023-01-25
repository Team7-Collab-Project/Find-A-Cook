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


        </form>
        </>
    );
}
export default VerifyPage;