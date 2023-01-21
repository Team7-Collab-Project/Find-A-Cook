import React, { useState } from 'react';
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
      <br />
      <h2> OR </h2>
      <p>Twitter</p>
      <p>Google</p>
      <p>Facebook</p>
      <button type="submit">Login</button>
    </form></>
  );
}

export default LoginPage;
