import React, {useState} from "react";
import axios from 'axios';
import BackButton from './components/BackButton'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState("")
    
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
        </>
    )
}

export default LoginPage;