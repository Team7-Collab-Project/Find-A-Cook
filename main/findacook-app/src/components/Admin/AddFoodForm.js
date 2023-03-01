import React, { useState, Fragment, useEffect } from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
// import { getCategories } from "../../api/category";
import { createProduct } from "../../redux/actions/productActions";
import { clearMessages } from '../../redux/actions/messageActions';
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

const AddFoodForm = () => {
  const { success, error} = useSelector(state => state.messages);
  const { loading } = useSelector(state => state.messages);
  const { categories } = useSelector(state => state.categories)


  const dispatch = useDispatch();
  const {errorMsg, setErrorMsg} = useState('');

  const [productData, setProductData] = useState({
    filename: null,
    item_name: "",
    product_description: "",
    category: "",
    price: "",
  });


  const handleMessages = evt => {
    dispatch(clearMessages());
    // setErrorMsg('');
  }


  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const data = await getCategories();
  //       setCategories(data);
  //       console.log("Categories: ", data);
  //       // const response = await getCategories();
  //       // setCategories(response.formData);
  //     } catch (error) {
  //       console.error("Error fetching categories:", error);
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  const {
    filename,
    item_name,
    product_description,
    category,
    price
  } = productData;

  const handleProductImage = (evt) => {
    console.log(evt.target.files[0]);
    setProductData({
      ...productData,
      [evt.target.name]: evt.target.files[0],
    });
  };

  const handleProductSubmit = (evt) => {
    evt.preventDefault();

    if (filename === null) {
			setErrorMsg('Please select an image');
		} else if (
      isEmpty(item_name) ||
      isEmpty(product_description) ||
      isEmpty(price)
    ) {
      setErrorMsg("All fields are required.");
    }  else {
      // const formData = {
      //   filename: filename,
      //   category: category,
      //   product_description: product_description,
      //   item_name: item_name,
      //   price: price,
      // }

      let formData = new FormData();
      
      formData.append('filename', filename);
			formData.append('category', category);
			formData.append('product_description', product_description);
			formData.append('item_name', item_name);
			formData.append('price', price);

      dispatch(createProduct(formData));
       setProductData({
              filename: null,
              category: '',
              product_description: '',
              item_name: '',
              price: '',
            })


      // createProduct(formData)
      //     .then((response) => {
      //       setProductData({
      //         // productImage: null,
      //         category: '',
      //         product_description: '',
      //         item_name: '',
      //         price: '',
      //       })
      //       setSuccess('Successful')
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       setErrorMsg('Unsuccessful')
      //     });
    }
  };

  const handleProductChange = (evt) => {
    setProductData({
      ...productData,
      [evt.target.name]: evt.target.value,
    });
  };

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-EU", {
      style: "currency",
      currency: "EUR",
    }).format(value);

  var num = 22;

  return (
    <div className="food-form-container" onClick={handleMessages}>
      <div>
        <div className="">
          <form 
          className="food-form" 
          onSubmit={handleProductSubmit}
          // action="/upload"
          method="POST"
          encType="multipart/form-data"
           >
            <div className="">
              <h5 className="food-form-h5">Insert New Food Item</h5>
              {/* <button className='close' data-dismiss='modal'>
								<span>
									<i className='fas fa-times'></i>
								</span>
							</button> */}
            </div>
            <div className="">
              {setErrorMsg && showErrorMsg(errorMsg)}
              {success && showSuccessMsg(success)}

              <Fragment>
                <div className="group">
                  <input
                    type="file"
                    className="form-input"
                    onChange={handleProductImage}
                    name="filename"
                  />
           
                </div>

                <div className="group">
                  <input
                    type="text"
                    className="form-input"
                    onChange={handleProductChange}
                    name="item_name"
                    value={item_name}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Name</label>
                </div>

                <div className="group">
                  <textarea
                    type="textarea"
                    className="form-input"
                    onChange={handleProductChange}
                    name="product_description"
                    value={product_description}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Description</label>
                </div>

                <div className="group">
                  {/* <input type='text' className="form-input" value={numberFormat(num)} required/> */}
                  <input
                    type="text"
                    className="form-input"
                    onChange={handleProductChange}
                    name="price"
                    value={price}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Price</label>
                </div>

                <div className="group">
                  <div className="form-row">
                    <div className="form-group">
                      <select 
                      onChange={handleProductChange} 
                      className="form-control"
                      name='category'>
                        <option>Choose One...</option>
                        {categories &&
                          categories.map((c) => (
                            <option key={c._id} value={c._id}>
                              {c.category_name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
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

export default AddFoodForm;
