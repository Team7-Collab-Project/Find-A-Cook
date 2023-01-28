import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import BackButton from './components/BackButton';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import "./index.css";


function RegisinfoPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phnum, setPhnum] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for registering
  };
  return (
    <><BackButton />
    <Link style={{textDecoration: 'none'}} to="/"><img id="loginLogo" alt="FindaCook logo" src="./images/logo-new-edit-01.png"/></Link>
    <form id="regisForm" onSubmit={handleSubmit}>
    <FormControl sx={{ width: '25ch' }}>
          <br />
          <TextField variant="filled" helperText="Please enter your email" className='formInput' label="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <br />
          <br />
          <TextField variant="filled" helperText="Please enter your password" className='formInput' label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
          <br />
          <br />
          <TextField variant="filled" helperText="Please enter your phone number" className='formInput' label="Phone Number" type="tel" value={phnum} onChange={(event) => setPhnum(event.target.value)}/>
          <br />
          <br />
          <br/>
            <Link style={{textDecoration: 'none'}} to="/verify"><button type="submit" className='btn' id="regBtn">Next</button></Link>
          <br />
    </FormControl>
      
      <hr></hr><h2> OR </h2>
      <br />
      <br />
      <img src="./images/twitIcon.png" alt="Twitter Icon" width="50px" height="50px"></img>
      <img src="./images/fbIcon.png" alt="Facebook Icon" width="50px" height="50px"></img>
      <img src="./images/googleIcon.png" alt="Google Icon" width="50px" height="50px"></img>
      <br />
      <Link style={{textDecoration: 'none'}} to="/login"><p>Already have an account? Log in here</p></Link>
      
    </form></>
  );
}

export default RegisinfoPage;