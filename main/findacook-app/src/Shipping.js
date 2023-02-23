import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from './redux/actions/orderActions';
import Navbar from "./components/Navbar/Navbar";

const Shipping = () => {
    const navigate = useNavigate();

    return(
        <>
        <Navbar />

 <div className='checkoutBody'> 

<h1>Checkout</h1>
<form id="checkout">
<div id="customer" className="block">

<h3>Customer Details</h3>
<hr />

<div className="column">

<div className="row padded">
    <h3 className='checkoutLabel'>First Name</h3>
    <input className='checkoutInput' type="text" name="customer[firstname]" value="Jane" placeholder="First Name" />
  </div>

  <div className="row">
    <h3 className='checkoutLabel'>Last Name</h3>
    <input className='checkoutInput' type="text" name="customer[lastname]" value="Doe" placeholder="Last Name" />
  </div>
</div>


<div className="row">
    <h3 className='checkoutLabel'>Email</h3>
    <input className='checkoutInput' type="text" name="customer[email]" value="janedoe@email.com" placeholder="Email" />
  </div>


  <div id="shipping" class="block">

    <h3>Address</h3>
    <hr />

  {/* <div className="row">
    <h3 className='checkoutLabel'>Country</h3>
    <select className='checkoutSelect' name="shipping[country]" onchange="localeListShippingCountries($(this).val())"></select>
  </div> */}

    <div className="row">
    <h3 className='checkoutLabel'>Name</h3>
    <input className='checkoutInput' type="text" name="shipping[name]" value="Jane Doe" />
  </div>

    <div className="row">
    <h3 className='checkoutLabel'>Street Address</h3>
    <input className='checkoutInput' type="text" name="shipping[street]" value="123 Test St." />
  </div>


  
  </div>




</div>


<button className='checkoutButton' type="button" >Continue</button>

</form>
</div>      

</>
    )
}


export default Shipping;










{/* <form id="checkout">

<div id="customer" class="block">

  <h3>Customer Details</h3>


  <div class="column">
  <div class="row padded">
    <label>First Name</label>
    <input type="text" name="customer[firstname]" value="Jane" placeholder="First Name" />
  </div>
  
  <div class="row">
    <label>Last Name</label>
    <input type="text" name="customer[lastname]" value="Doe" placeholder="Last Name" />
  </div>
</div>

  <div class="row">
    <label>Email</label>
    <input type="text" name="customer[email]" value="janedoe@email.com" placeholder="Email" />
  </div>

</div>

<div id="shipping" class="block">

  <h3>Shipping Details</h3>
  <hr>

  <div class="row">
    <label>Country</label>
    <select name="shipping[country]" onchange="localeListShippingCountries($(this).val())"></select>
  </div>

  <div class="row">
    <label>Name</label>
    <input type="text" name="shipping[name]" value="Jane Doe" />
  </div>

  <div class="row">
    <label>Street Address</label>
    <input type="text" name="shipping[street]" value="123 Test St." />
  </div>
  
  <div class="column">
    <div class="row padded">
      <label>City</label>
      <input type="text" name="shipping[town_city]" value="Fake City" />
    </div>

    <div class="row">
      <label>Province/Region/State</label>
      <select name="shipping[county_state]"></select>
    </div>
  </div>
   
  <div class="column">
  <div class="row padded">
    <label>Postal/Zip Code</label>
    <input type="text" name="shipping[postal_zip_code]" value="94107" />
  </div>
  
  <div class="row">
    <label>Shipping method</label>
  <select name="fulfillment[shipping_method]"></select>
</div>
 </div>

</div>
      </form> */}