import React, { useState } from "react";
import BackButton from './components/BackButton';
import axios from 'axios';

function RegistrationPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        axios.post('http://localhost:3001/register', {
            name: name, 
            email: email, 
            password: password,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div>
            <BackButton />
            
                <input
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
                <input
                    type="password"
                    placeholder="Password"
                    //value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={register}>Register</button>
            
        </div>
    );
}

export default RegistrationPage;