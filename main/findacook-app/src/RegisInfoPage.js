import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import BackButton from './components/BackButton';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import "./index.css";


function RegisinfoPage() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phnum, setPhnum] = useState('');
  const [addr, setAddr] = useState('');

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
          <TextField variant="filled" helperText="Please enter your first name" className='formInput' label="First Name" value={fname} onChange={(event) => setFname(event.target.value)}  />
          <br />
          <br />
          <TextField variant="filled" helperText="Please enter your surname" className='formInput' label="Surname" value={lname} onChange={(event) => setLname(event.target.value)} />
          <br />
          <br />
          <TextField variant="filled" helperText="Please enter your phone number" className='formInput' label="Phone Number" type="tel" value={phnum} onChange={(event) => setPhnum(event.target.value)} />
          <br />
          <br />
          <TextField variant="filled" helperText="Please enter your address" className='formInput' label="Address" value={addr} onChange={(event) => setAddr(event.target.value)} />
          <br />
          <br />
          <br/>
            <Link style={{textDecoration: 'none'}} to="/terms"><button type="submit" className='btn' id="regBtn">Next</button></Link>
          <br />
    </FormControl>
    </form></>
  );
}

export default RegisinfoPage;