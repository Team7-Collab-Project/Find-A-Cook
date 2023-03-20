import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post('http://localhost:5001/user/logout')
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
