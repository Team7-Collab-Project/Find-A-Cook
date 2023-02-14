import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const [user, setUser] = useState({});
  axios.defaults.withCredentials = true

  useEffect(() => {
    axios.get("http://localhost:3001/userinfo").then((response) => {
      if (response.data) {
        setUser(response.data[0]); 
      }
    });
  }, []);

  return (
    <nav>
      <><LogoutButton/>
      <span>Welcome, {user.name ?? 'Loading...'}</span>
      </>
    </nav>
  );
};

export default Navbar;