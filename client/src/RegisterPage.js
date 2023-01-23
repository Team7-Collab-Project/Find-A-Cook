import React, { useState} from "react";
import BackButton from './components/BackButton';
import axios from 'axios';

function RegistrationPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('/register', { name, email, password })
            .then((res) => {
                setMessage(res.data.message);
            })
            .catch((err) => {
                console.log(err);
                setMessage('Error registering user');
            });
    };

      return (
        <div>
            <><BackButton />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form></>
        <p>{message}</p>
        </div>
  );
}

export default RegistrationPage;