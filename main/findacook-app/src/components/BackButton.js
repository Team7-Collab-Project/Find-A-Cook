import { useNavigate} from "react-router-dom";

const BackButton = () => {
    let navigate = useNavigate();
    return (
          <button id="backBtn"><img  src='./images/backBtnimg.png' alt="back button" height="75px" width="75px" onClick={() => navigate(-1)}/></button>
    );
};

export default BackButton
