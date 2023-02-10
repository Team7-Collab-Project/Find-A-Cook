import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createCategory } from "../../api/category";
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { useDispatch } from 'react-redux';
// import { createProduct } from '../../redux/actions/productActions';

const AddCategoryForm = () => {

    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const dispatch = useDispatch();

    // const handleCategoryName = (evt) => {
    //     setCategory(evt.target.value);
    // }

    const [productData, setProductData] = useState({
      categoryName: '',
      categoryDescription: '',
    });

    const handleProductChange = (evt) => {
      setProductData({
        ...productData,
        [evt.target.name]: evt.target.value,
      });
    };
  

    const handleCategorySubmit = (evt) => {
        evt.preventDefault();
        const data = { category }

        createCategory(data)
    }

  return (
    <div className="food-form-container">
      <div >
        <div className="">
          <form className="food-form" onSubmit={handleCategorySubmit}>
          <div className=''>
          <h5 className='food-form-h5'>Create New Category</h5>
            </div>
            <div className="">
                {error && showErrorMsg(error)}
                {success && showSuccessMsg(success)}

<Fragment>

    <div className="group">
<input type='text' className="form-input" name='categoryName' onChange={handleProductChange} />
<span className="highlight"></span>
      <span className="bar"></span>
      <label>Name</label>
    </div>

    <div className="group">
<textarea type='textarea' className="form-input" name='categoryDescription' onChange={handleProductChange}  />
<span className="highlight"></span>
      <span className="bar"></span>
      <label>Description</label>
    </div>



</Fragment>
            </div>


            {/* TODO: ADD CATEGORY OPTION... */}
            <button type="submit" className="form-footer-button">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* <button type="submit" className="form-footer-button" onClick={handleProductSubmit}>
              Submit
            </button> */}
   
     </div>
  );
};

export default AddCategoryForm;
