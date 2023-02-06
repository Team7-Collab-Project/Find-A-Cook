import React from 'react';
import axios from 'axios';

const LogoutButton = ({ setLoginStatus }) => {
  const handleLogout = () => {
    axios.get("http://localhost:3001/logout").then((response) => {
      if (response.data.message === "Successfully logged out") {
        setLoginStatus("");
        // redirect to login page
      }
    });
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
