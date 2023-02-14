import React, {useEffect, useState} from "react";
import axios from 'axios';
import BackButton from './components/BackButton'
import { useNavigate, Redirect } from "react-router-dom";
import LogoutButton from "./components/LogoutButton";
import './index.css';
import {FaFacebook, FaGoogle, FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState("")
    const navigate = useNavigate();

    axios.defaults.withCredentials = true
    const login = () => {
        axios.post('http://localhost:3001/login', {
            email: email, 
            password: password,
        }).then((response) => {
            if (response.data.message){
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].name);
                // redirect to appropriate page based on user type
                const userType = response.data[0].usertype;
                if (userType === "cook") {
                    navigate("/cook")
                } else {
                    navigate("/guest")
                }
            }
            console.log(response.data);
        });
    }

    
    useEffect(()=> {
        axios.get("http://localhost:3001/login").then((response)=> {
            if (response.data.loggedIn == true)
            setLoginStatus(response.data.user[0].name)
        })
    }, [])
    return (
        <><BackButton />
           
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
                    type="email"
                    placeholder="Please Enter Your Email"
                    onChange={(event) => setEmail(event.target.value)}
                    /> 
                </div>

                <div className="input-box">
                <input
                className="input-field"
                    type="password"
                    placeholder="Please Enter Your Password"
                    onChange={(event) =>setPassword(event.target.value)}
                    />
                </div>

                <div className="input-box">
                <button
                className="input-submit"
                    type="submit"
                    value="Sign In"
                    onClick={login}>Login</button>
                       <h1>{loginStatus}</h1>
            <LogoutButton setLoginStatus={setLoginStatus} />
                </div>

                <p className="connect">Or Connect With</p>
                <ul className="connect">
                    <li><FaFacebook /></li>
                    <li><FaGoogle /></li>
                    <li><FaTwitter /></li>
                </ul>

                <div className="forgot">
                    <span><Link to="/register"><p>Don't have an account? Register here</p></Link></span>
                    <span>Forgot Password?</span>
                </div>
                
            </div>
            <div className="wrapper"></div>
        </div>
        </div>



  
      



        </>
    )
}

export default LoginPage;