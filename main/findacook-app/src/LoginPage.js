import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from './components/BackButton';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for logging in
  };

  return (
    <><BackButton />
    <form id='loginForm' onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br/>
      <button type="submit">Login</button>
      <br />
      <h2> OR </h2>
      <p>Twitter *placeholder*</p>
      <p>Google *placeholder*</p>
      <p>Facebook *placeholder*</p>

      <br></br>
      <Link style={{textDecoration: 'none'}} to="/register"><p>Don't have an account? Register here</p></Link>
      
    </form></>
  );
}

export default LoginPage;
