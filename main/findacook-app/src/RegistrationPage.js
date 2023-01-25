import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import BackButton from './components/BackButton';

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for registering
  };

  return (
    <><BackButton />
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br/>
      <button type="submit">Next</button>
      <br />
      <h2> OR </h2>
      <p>Twitter *placeholder*</p>
      <p>Google *placeholder*</p>
      <p>Facebook *placeholder*</p>
      <br />
      <Link style={{textDecoration: 'none'}} to="/login"><p>Already have an account? Log in here</p></Link>
      
    </form></>
  );
}

export default RegistrationPage;
