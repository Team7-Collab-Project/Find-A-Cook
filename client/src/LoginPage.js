import React, {useEffect, useState} from "react";
import axios from 'axios';
import BackButton from './components/BackButton'
import { useNavigate, Redirect } from "react-router-dom";
import LogoutButton from "./components/LogoutButton";

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
            <label>
                Email:
                <input
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    onChange={(event) =>setPassword(event.target.value)}
                    />
            </label>
            <button onClick={login}>Login</button>
            <h1>{loginStatus}</h1>
            <LogoutButton setLoginStatus={setLoginStatus} />
        </>
    )
}

export default LoginPage;