import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import UploadDocuments from './UploadDocuments';
import RegistrationPage from './RegistrationPage';
import GuestPage from './GuestPage';
import './index.css';
import reportWebVitals from './reportWebVitals';
import VerifyPage from './VerifyPage';
import CookDashboard from './CookDashboard';
import RegisinfoPage from './RegisInfoPage';
import TermsPage from './TermsPage';
import 'font-awesome/css/font-awesome.min.css';
import CookProfile from './CookProfile';
import ViewCooks from './ViewCooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/guest" element={<GuestPage/>} />
        <Route path="/cookReg" element={<UploadDocuments/>} />
        <Route path="/verify" element={<VerifyPage/>} />
        <Route path="/cookdashboard" element={<CookDashboard/>} />
        <Route path="/registerprofile" element={<RegisinfoPage/>}/>
        <Route path="/terms" element={<TermsPage/>}/>
        <Route path="/profile" element={<CookProfile/>}/>
        <Route path="/viewcooks" element={<ViewCooks/>}/>
      
    </Routes>
    {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
