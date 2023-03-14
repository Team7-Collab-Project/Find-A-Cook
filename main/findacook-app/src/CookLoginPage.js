import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from './components/BackButton';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import RememberPassword from './components/RememberPassword';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa";


function CookLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
  
    // check if the checkbox is checked
    if (RememberPassword.checked) {
      // save email and password to local storage
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", password.value);
    } else {
      // remove email and password from local storage
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  
    // perform login
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for logging in
    window.location.href = "/cookdashboard";
  };

  return (
    <>
    <div class="login-fg">
    <div class="container-fluid">
        <div class="row">
        <div className="col-xl-8 col-lg-7 col-md-12 bg" style={{backgroundImage: "url('./images/cookLogin.png')"}}>
            </div>
            <div class="col-xl-4 col-lg-5 col-md-12 login">
                <div class="login-section">
                    <div class="logo clearfix">
                        <a href="#">
                            Find A Cook
                        </a>
                    </div>
                    <h3>Welcome Back!</h3>
                    <ul class="social">
                        <li><a href="#" class="facebook"><FaFacebook />{' '}<span>Facebook</span></a></li>
                        <li><a href="#" class="twitter"><BsTwitter />{' '}<span>Twitter</span></a></li>
                        <li><a href="#" class="google"><FaGoogle />{' '}<span>Google</span></a></li>
                    </ul>
                    <div class="or-login clearfix">
                        <span>Or</span>
                    </div>
                    <div class="form-container">
                        <form>
                            <div class="form-group form-fg">
                                <input type="email" name="email" class="input-text" placeholder="Email Address" />
                            </div>
                            <div class="form-group form-fg">
                                <input type="email" name="email" class="input-text" placeholder="Password" />
                            </div>
                            <div class="form-group mt-2">
                                <button type="submit" class="btn-md btn-fg btn-block">Login</button>
                            </div>
                        </form>
                    </div>
                    <p>Interested in becoming a <strong>cook</strong>? <a href="/cookregistration" class="linkButton">Sign Up!</a></p>
                </div>
            </div>
        </div>
    </div>
</div>  
    </>
  );
}

export default CookLoginPage;
