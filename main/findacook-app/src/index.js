import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from './LandingPage';
// import LoginPage from './LoginPage';
// import UploadDocuments from './UploadDocuments';
// import RegistrationPage from './RegistrationPage';
// import GuestPage from './GuestPage';
// import TestPage from './TestPage';
// import CartPage2 from './CartPage2';
// import OrderInfoPage from './OrderInfoPage';
// import ProductPage from './ProductPage';
import './index.css';
import reportWebVitals from './reportWebVitals';
import VerifyPage from './VerifyPage';
import CookDashboard from './CookDashboard';
import RegisinfoPage from './RegisInfoPage';
import TermsPage from './TermsPage';
import 'font-awesome/css/font-awesome.min.css';
import CookProfile from './CookProfile';
import ViewCooks from './ViewCooks';
import { commerce } from './lib/commerce';
// import data from './components/Data/data';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store';


// const store = configureStore({ allReducers });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}><App /></Provider>
    {/* <Routes>
      
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
        <Route path="/test" element={<TestPage/>} />
        <Route path="/cart" element={<CartPage2/>} />
        <Route path="/order" element={<OrderInfoPage/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/documentupload" element={<UploadDocuments/>} />
      
    </Routes> */}
    {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
