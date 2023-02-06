import React from 'react';
import axios, { Axios } from 'axios';

function GuestPage() {
  axios.get('http://localhost:3001/login')
  .then(response => {
    console.log(response.data);
    if (response.data.loggedIn) {
      console.log('User type: ', response.data.user[0].usertype);
    }
  })
  .catch(error => {
    console.error(error);
  });

}

export default GuestPage;