
import './App.css';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import UploadDocuments from './UploadDocuments';
import RegistrationPage from './RegistrationPage';
import GuestPage from './GuestPage';
import TestPage from './TestPage';
import CartPage2 from './CartPage2';
import OrderInfoPage from './OrderInfoPage';
import ProductPage from './ProductPage';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { commerce } from './lib/commerce';
import SampleAdminDashboard from './SampleAdminDashboard';

function App() {

  // const [products, setProducts] = useState([]);

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();

  //   setProducts(data);
  // };

  // useEffect(() => {
  //   fetchProducts();
  //  // fetchCart();
  // }, []);
  return (
    <div>
          <Routes>
      
      <Route exact path="/" element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegistrationPage/>} />
      <Route path="/guest" element={<GuestPage/>} />
      <Route path="/test" element={<TestPage/>} />
      <Route path="/cart" element={<CartPage2/>} />
      <Route path="/order" element={<OrderInfoPage/>} />
      <Route path="/product" element={<ProductPage/>} />
      <Route path="/admin" element={<SampleAdminDashboard/>} />
      <Route path="/documentupload" element={<UploadDocuments/>} />
    
  </Routes>
    </div>
  );
}

export default App;
