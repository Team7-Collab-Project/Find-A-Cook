import React, { useState, Fragment } from "react";
import { FaPlus, FaMinusCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const AddFoodForm = () => {

    // const handleProductChange = evt => {
	// 	setProductData({
	// 		...productData,
	// 		[evt.target.name]: evt.target.value,
	// 	});
	// };


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
<input type='file' className="form-input" />
{/* <label>Choose File</label> */}
    </div>
</Fragment>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFoodForm;
