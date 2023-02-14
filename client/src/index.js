import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import LandingPage from './LandingPage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import CookPage from './CookPage';
import GuestPage from './GuestPage';
import UploadDocuments from './UploadDocuments';
import VerifyPage from './VerifyPage';
import CookDashboard from './CookDashboard';
import RegisinfoPage from './RegisInfoPage';
import TermsPage from './TermsPage';
import ProductPage from './ProductPage';


import './index.css';
import ViewCooks from './ViewCooks';
import OrderInfoPage from './OrderInfoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/cook" element={<CookPage/>} />
            <Route path="/guest" element={<GuestPage/>} />
            <Route path="/cookdashboard" element={<CookDashboard/>} />
            <Route path="/registerprofile" element={<RegisinfoPage/>}/>
            <Route path="/terms" element={<TermsPage/>}/>
            <Route path="/verify" element={<VerifyPage/>} />
            <Route path="/cookReg" element={<UploadDocuments/>} />
            <Route path="/viewCooks" element={<ViewCooks/>} />
            <Route path="/product" element={<ProductPage/>} />
            <Route path="/order" element={<OrderInfoPage/>} />
        </Routes>
  </BrowserRouter>
  
);

