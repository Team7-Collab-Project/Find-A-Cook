import React, { useState } from "react";
import BackButton from './components/BackButton';
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate, Redirect } from "react-router-dom";

function RegistrationPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true
    const register = () => {
        if (validateForm()){
            axios.post('http://localhost:3001/register', {
                name: name, 
                email: email, 
                password: password,
            }).then((response) => {
                console.log(response);
                navigate("/login")
            });
        }
    };

    const validateForm = () => {
        setEmailError('');
        setPasswordError('');

        let emailValid = true;
        let passwordValid = true;

        // Email validation
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
            emailValid = false;
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must contain at least 8 characters, including 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character');
            passwordValid = false;
        }

        return emailValid && passwordValid;
    }

    return (
        <>
        {/* <div> */}
            <BackButton />
            
                {/* <input
                    type="text"
                    placeholder="Name"
                    //value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    //value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p style={{color: 'red'}}>{emailError}</p>}
                <input
                    type="password"
                    placeholder="Password"
                    //value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p style={{color: 'red'}}>{passwordError}</p>}
                <button onClick={register}>Register</button>
            
        </div> */}






<div className="newLoginFormContainer">
<div className="newLoginForm">
    <div className="box">
        <div className="newLoginHeader">
            <header className="loginHeader">
                <img src="./images/logo-new-edit-01.png" alt="" />
                <p>Welcome Back!</p>
            </header>
        </div>
        <div className="input-box">
                         <input
            className="input-field"
            type="text"
            placeholder="Please Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            /> 
        </div>

        <div className="input-box">
                         <input
            className="input-field"
            type="email"
            placeholder="Please Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            /> 
            {emailError && <p style={{color: 'red'}}>{emailError}</p>}
        </div>

        <div className="input-box">
        <input
        className="input-field"
            type="password"
            placeholder="Please Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p style={{color: 'red'}}>{passwordError}</p>}
        </div>

        <div className="input-box">
        <button
        className="input-submit"
            type="submit"
            value="Sign In"
            onClick={register}>Register</button>
        </div>



        <div className="forgot">
            <span><Link to="/login"><p>Already have an account? Login here</p></Link></span>
        </div>
        
    </div>
    <div className="wrapper"></div>
</div>
</div>
</>
    );
}

export default RegistrationPage;