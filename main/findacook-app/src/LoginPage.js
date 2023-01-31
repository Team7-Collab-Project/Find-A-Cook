import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from './components/BackButton';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import RememberPassword from './components/RememberPassword';



function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
  
    // check if the checkbox is checked
    if (RememberPassword.checked) {
      // save email and password to local storage
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", password.value);
    } else {
      // remove email and password from local storage
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  
    // perform login
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for logging in
  };

  return (
    <><BackButton />
    <Link style={{textDecoration: 'none'}} to="/"><img id="loginLogo" alt="FindaCook logo" src="./images/logo-new-edit-01.png"/></Link>
    <form id='loginForm' onSubmit={handleSubmit}>
      <h2>Welcome Back</h2>
      <h3>Please enter your email and password to log-in.</h3>
        <FormControl sx={{ width: '25ch' }}>
          <br/>
          <TextField variant="filled" helperText="Please enter your email" className='formInput' label="Email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
          <br />
          <br />
          <TextField variant="filled" helperText="Please enter your password" className='formInput' label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
          <RememberPassword />
          <br />
          <br />
          <br/>
          <Link style={{textDecoration: 'none'}} to="/cookdashboard"><button className="btn" id="loginBtn" type="submit">Login</button></Link>
          <br />
        </FormControl>
      
      <hr></hr><h2> OR </h2>
      <h3>Sign-in with:</h3>
      <img src="./images/twitIcon.png" id="twitLogin" alt="Twitter Icon"></img>
      <img src="./images/fbIcon.png" id="fbLogin" alt="Facebook Icon"></img>
      <img src="./images/googleIcon.png" id="gooLogin" alt="Google Icon"></img>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link style={{textDecoration: 'none'}} to="/register"><p>Don't have an account? Register here</p></Link>
      
    </form></>
  );
}

export default LoginPage;
