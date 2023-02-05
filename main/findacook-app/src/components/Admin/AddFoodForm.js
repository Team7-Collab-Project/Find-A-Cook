import React, { useState, Fragment } from "react";
import { FaPlus, FaMinusCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const AddFoodForm = () => {

    const [product, setProduct] = useState('');

    const handleProductChange = (evt) => {
        setProduct(evt.target.vaalue);
	};

    const handleProductSubmit = (evt) => {
        evt.preventDefault();

        createProduct();
    }

const numberFormat = (value) =>
  new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR'
  }).format(value);


  var num = 22;

  return (
    <div className="food-form-container">
      <div >
        <div className="">
          <form className="food-form">
          <div className=''>
          <h5 className='food-form-h5'>Insert New Food Item</h5>
          {/* <button className='close' data-dismiss='modal'>
								<span>
									<i className='fas fa-times'></i>
								</span>
							</button> */}
            </div>
            <div className="">
<Fragment>
    <div className="group">
<input type='file' className="form-input" required />
{/* <label>Choose File</label> */}
    </div>

    <div className="group">
<input type='text' className="form-input" required/>
<span class="highlight"></span>
      <span class="bar"></span>
      <label>Name</label>
    </div>

    <div className="group">
<textarea type='textarea' className="form-input" required/>
<span class="highlight"></span>
      <span class="bar"></span>
      <label>Description</label>
    </div>


    <div className="group">
<input type='text' className="form-input" value={numberFormat(num)} required/>
<span class="highlight"></span>
      <span class="bar"></span>
      <label>Price</label>
    </div>
</Fragment>
            </div>


            {/* TODO: ADD CATEGORY OPTION */}

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFoodForm;
