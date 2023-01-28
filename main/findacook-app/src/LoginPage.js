import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from './components/BackButton';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';



function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for logging in
  };

  return (
    <><BackButton />
    <Link style={{textDecoration: 'none'}} to="/"><img id="loginLogo" alt="FindaCook logo" src="./images/logo-new-edit-01.png"/></Link>
    <form id='loginForm' onSubmit={handleSubmit}>
      <h2>Welcome Back</h2>
        <FormControl sx={{ width: '25ch' }}>
          <br/>
          <TextField variant="filled" helperText="Please enter your email" className='formInput' label="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <br />
          <br />
          <TextField variant="filled" helperText="Please enter your password" className='formInput' label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
          <br />
          <br />
          <br/>
            <button className="btn" id="loginBtn" type="submit">Login</button>
          <br />
        </FormControl>
      
      <hr></hr><h2> OR </h2>
      <br />
      <br />
      <img src="./images/twitIcon.png" alt="Twitter Icon" width="50px" height="50px"></img>
      <img src="./images/fbIcon.png" alt="Facebook Icon" width="50px" height="50px"></img>
      <img src="./images/googleIcon.png" alt="Google Icon" width="50px" height="50px"></img>

      <br></br>
      <Link style={{textDecoration: 'none'}} to="/register"><p>Don't have an account? Register here</p></Link>
      
    </form></>
  );
}

export default LoginPage;
