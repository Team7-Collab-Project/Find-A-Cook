import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "./components/BackButton";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "./index.css";

function CookRegPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const today = new Date();
    const birthDate = new Date(birth);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (!email.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")) {
      window.alert("Invalid email");
      return;
    }
    if (
      !password.match(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
      )
    ) {
      window.alert(
        "Password must contain 8 characters, an uppercase letter, a number and a special character"
      );
      return;
    }
    if (age < 18) {
      window.alert("You must be at least 18 years old to register.");
      return;
    }

    // Logic for registering
    window.location.href = "/verify";
  };
  return (
    <>
      {/* <BackButton /> */}

      {/* <Link style={{textDecoration: 'none'}} to="/"><img id="loginLogo" alt="FindaCook logo" src="./images/logo-new-edit-01.png"/></Link>
    <form id="regisForm" onSubmit={handleSubmit}>
    <FormControl sx={{ width: '25ch' }}>
          <br />
          <TextField required variant="filled" helperText="Please enter your email" className='formInput' label="Email" value={email} onChange={(event) => setEmail(event.target.value)} inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" }} />
          <br />
          <br />
          <TextField required variant="filled" helperText="Please enter your password" className='formInput' label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} inputProps={{ pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"}}/>
          <br />
          <br />
          <TextField required variant="filled" helperText="Please enter your date of birth" id="regBirth" className='formInput' type="date" value={birth} onChange={(event) => setBirth(event.target.value)}/>          <br />
          <br />
          <br/>
            <button type="submit" className='btn' id="regBtn">Next</button>
    </FormControl>
      
      <hr></hr><h2> OR </h2>
      <h3>Sign-up with:</h3>
      <br />
      <img src="./images/twitIcon.png" id="twitSign" alt="Twitter Icon"></img>
      <img src="./images/fbIcon.png" id="fbSign" alt="Facebook Icon"></img>
      <img src="./images/googleIcon.png" id="gooSign" alt="Google Icon"></img>
      <br />
      <br />
      <br />
      <Link style={{textDecoration: 'none'}} to="/login"><p>Already have an account? Log in here</p></Link>
      
    </form> */}

<div className="login-fg">
    <div className="container-fluid">
        <div className="row">
        <div className="col-xl-8 col-lg-7 col-md-12 bg" style={{backgroundImage: "url('./images/cookReg.png')"}}>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-12 login">
                <div className="login-section">
                    <div className="logo clearfix">
                        <a href="#">
                            Find A Cook
                        </a>
                    </div>
                    <h3>New Here? Join Us!</h3>
                    {/* <ul className="social">
                        <li><a href="#" className="facebook"><FaFacebook />{' '}<span>Facebook</span></a></li>
                        <li><a href="#" className="twitter"><BsTwitter />{' '}<span>Twitter</span></a></li>
                        <li><a href="#" className="google"><FaGoogle />{' '}<span>Google</span></a></li>
                    </ul>
                    <div className="or-login clearfix">
                        <span>Or</span>
                    </div> */}
                    <div className="form-container">
                        <form>
                            <div className="form-group form-fg">
                                <input type="email" name="email" className="input-text" placeholder="Email Address" />
                            </div>
                            <div className="form-group form-fg">
                                <input type="text" name="firstName" className="input-text" placeholder="Legal First Name" />
                            </div>
                            <div className="form-group form-fg">
                                <input type="text" name="surname" className="input-text" placeholder="Legal Surname" />
                            </div>
                            <div className="form-group form-fg">
                                <input type="number" name="number" className="input-text" placeholder="Phone Number" />
                            </div>
                            <div className="form-group form-fg">
                                <input type="email" name="email" className="input-text" placeholder="Password" />
                            </div>
                            <div className="form-group form-fg">
                                <input type="date" name="date" className="input-text" placeholder="Birth Date" />
                            </div>
                            <div className="form-group mt-2">
                                <a href="/complete-form">
                                <button type="submit" className="btn-md btn-fg btn-block">Continue</button>
                                </a>
                            </div>
                        </form>
                    </div>
                    <p>Already one of us? <a href="/cooklogin" className="linkButton">Sign In</a></p>
                </div>
            </div>
        </div>
    </div>
</div>  


    </>
  );
}

export default CookRegPage;
