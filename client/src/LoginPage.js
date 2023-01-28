import React, {useEffect, useState} from "react";
import axios from 'axios';
import BackButton from './components/BackButton'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState("")
    
    axios.defaults.withCredentials = true
    const login = () => {
        axios.post('http://localhost:3001/login', {
            email: email, 
            password: password,
        }).then((response) => {
            if (response.data.message){
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].name)
            }
            console.log(response.data);
        });
    }

    const logout = () => {
        axios.get("http://localhost:3001/logout").then((response) => {
          if (response.data.message === "Successfully logged out") {
            setLoginStatus("");
            // redirect to login page
          }
        });
      };
    
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
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default LoginPage;