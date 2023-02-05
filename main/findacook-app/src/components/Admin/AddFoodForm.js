import React, { useState, Fragment } from "react";
import { FaPlus, FaMinusCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";

const AddFoodForm = () => {

    // const handleProductChange = evt => {
	// 	setProductData({
	// 		...productData,
	// 		[evt.target.name]: evt.target.value,
	// 	});
	// };


  return (
    <div>
      <div className="">
        <div className="">
          <form>
          <div className=''>
          <h5 className=''>Add Food</h5>
          {/* <button className='close' data-dismiss='modal'>
								<span>
									<i className='fas fa-times'></i>
								</span>
							</button> */}
            </div>
            <div className="modal-body">
<Fragment>
    <div className="insert-photo">
<input type='file' />
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
