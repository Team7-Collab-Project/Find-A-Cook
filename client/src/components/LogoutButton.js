import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {

    axios.get("http://localhost:3001/logout").then((response) => {
      if (response.data.message === "Successfully logged out") {
        navigate('/login');
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
