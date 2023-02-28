import React, { useState, Fragment } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { createCategory } from "../../api/category";
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";

import { useSelector, useDispatch } from "react-redux";
import {clearMessages} from '../../redux/actions/messageActions';
import { createCategory } from "../../redux/actions/categoryActions";

const AddCategoryForm = () => {

    const { success, error} = useSelector(state => state.messages);
    const { loading } = useSelector(state => state.messages);

    const dispatch = useDispatch();
    const {errorMsg, setErrorMsg} = useState('');

    const [categoryData, setCategoryData] = useState({
      category_name: '',
      category_description: '',
    });
  
      const {
        category_name,
        category_description,
    } = categoryData;

    // const [error, setError] = useState('');
    // const [success, setSuccess] = useState('');

    const handleMessages = evt => {
      dispatch(clearMessages());
      setErrorMsg('');

    }

    const handleCategoryChange = (evt) => {
        dispatch(clearMessages());
        setCategoryData({
          ...categoryData,
          [evt.target.name]: evt.target.value,
        });
    };

    const handleCategorySubmit = (evt) => {
        evt.preventDefault();

        if(isEmpty(category_name)) {
          setErrorMsg('Please enter a category name');
        } else if(isEmpty(category_description)) {
          setErrorMsg('Please enter a category description');
        } else {
          const data = { 
            category_name: category_name,
            category_description: category_description,
          };

          dispatch(createCategory(data));
          setCategoryData({
            category_name: '',
            category_description: '',
          })
    
          // createCategory(data)
          //     .then((response) => {
          //       setCategoryData({
          //         category_name: '',
          //         category_description: '',
          //       })
          //       setSuccess('Successful')
          //     })
          //     .catch((err) => {
          //       console.log(err);
          //       setError('Unsuccessful')
          //     })
        }
    
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
                {setErrorMsg && showErrorMsg(errorMsg)}
                {success && showSuccessMsg(success)}

                <Fragment>
                  <div className="group">
                    <input type='text' className="form-input" name='category_name' onChange={handleCategoryChange} value={category_name} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Name</label>
                  </div>

                  <div className="group">
                    <textarea type='textarea' className="form-input" name='category_description' onChange={handleCategoryChange} value={category_description} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Description</label>
                  </div>
                </Fragment>
            </div>

            <button type="submit" className="form-footer-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// export


export default AddCategoryForm;
