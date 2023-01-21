import React, { useState } from 'react';
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
      <br />
      <h2> OR </h2>
      <p>Twitter</p>
      <p>Google</p>
      <p>Facebook</p>
      <button type="submit">Next</button>
    </form></>
  );
}

export default RegistrationPage;
