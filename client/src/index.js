import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" exact component={LandingPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
        </Routes>,
  </BrowserRouter>
  
);

