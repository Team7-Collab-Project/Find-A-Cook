import React, { useState, Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { createProduct } from "../../api/product";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { useDispatch } from "react-redux";
import { getCategories } from '../../api/category'
// import { createProduct } from '../../redux/actions/productActions';

const AddFoodForm = () => {
  const [categories, setCatgories] = useState(null);
  const [product, setProduct] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    productImage: null,
    productName: "",
    productDescription: "",
    productPrice: "",
  });

  
  useEffect(() => {
    loadCategories();
  }, [])

  const loadCategories = async () =>{
    await getCategories();
  }

  const { productImage, productName, productDescription, productPrice } =
    productData;
  // TODO: Make error + success messages reusable

  // const handleProductChange = (evt) => {
  //     setError('');
  //     setSuccess('');
  //     setProduct(evt.target.vaalue);
  //     console.log('this does something')
  // };

  const handleProductImage = (evt) => {
    console.log(evt.target.files[0]);
    setProductData({
      ...productData,
      [evt.target.name]: evt.target.files[0],
    });
  };

  // const handleProductSubmit = (evt) => {
  //     evt.preventDefault();

  // if (productImage === null) {
  // 	setError('Please select an image.');
  // } else if (
  // 	isEmpty(productName) ||
  // 	isEmpty(productDescription) ||
  // 	isEmpty(productPrice)
  // ) {
  // 	setError('Form Is Incomplete');
  // } else if (isEmpty(productName)) {
  // 	setError('Give your item a name.');
  // } else if (isEmpty(productDescription)) {
  // 	setError('Tell your clients more about your product.');
  //     } else {
  // 	let formData = new FormData();

  // 	formData.append('productImage', productImage);
  // 	formData.append('productName', productName);
  // 	formData.append('productDescription', productDescription);
  // 	formData.append('productPrice', productPrice);

  // 	dispatch(createProduct(formData));
  // 	setProductData({
  // 		productImage: null,
  // 		productName: '',
  // 		productDescription: '',
  // 		productPrice: ''
  // 	})

  //         // createProduct(formData)
  //         //   .then((response) =>{
  //         //     setProductData({
  //         //       productImage: null,
  //         //       productName: '',
  //         //       productDescription: '',
  //         //       productPrice: '',
  //         //     })
  //         //     setSuccess(response.data.successMessage)
  //         //   })
  //         //   .catch((err) => {
  //         //     console.log(err)
  //         //     setError(err.response.data.errorMessage)
  //         //   })
  //     }

  //     // TODO: THIS IS KINDA BROKEN!!!!

  //     // if (isEmpty(product)) {
  //     //     setError('Form Is Incomplete');
  //     //     console.log('emptyyyyy')
  //     // }
  //     // else{
  //     //     // const data = {product}
  //     //     // createProduct(data);
  //     //     console.log('maybe something happens?')
  //     // }
  //     // const data = {product}
  //     // createProduct(data);

  //     // createProduct();
  // }

  // const handleProductImage = (evt) => {
  // 	console.log(evt.target.files[0]);
  // 	setProductData({
  // 		...productData,
  // 		[evt.target.name]: evt.target.files[0],
  // 	});
  // };

  //   const handleProductSubmit = (evt) => {
  //     evt.preventDefault();

  //     if (productImage === null) {
  //         error('Please select an image');
  //     } else if (
  //         isEmpty(productName) ||
  //         isEmpty(productDescription) ||
  //         isEmpty(productPrice)
  //     ) {
  //         setError('Form Is Incomplete');
  //     } else {
  //         let formData = new FormData();

  //         formData.append('productImage', productImage);
  //         formData.append('productName', productName);
  //         formData.append('productDescription', productDescription);
  //         formData.append('productPrice', productPrice);

  //         createProduct(formData)
  //             .then((response) => {
  //               setProductData({
  //                 productImage: null,
  //                 productName: '',
  //                 productDesc: '',
  //                 productPrice: '',
  //                 productCategory: '',
  //                 productQty: '',
  //             })
  //             setSuccess(response.data.successMessage)
  //             })
  //             .catch((err) => {
  //                 console.log(err);
  //                 setError(err.response.data.errorMessage)
  //             });
  //     }
  // };

  const handleProductSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("productImage", productImage);
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("productPrice", productPrice);
    let result = fetch("http://localhost:3001/api/product", {
      method: "POST",
      body: formData,
    });
    // if (productImage === null) {
    //   setError('Please select an image.');
    // } else if (
    //   isEmpty(productName) ||
    //   isEmpty(productDescription) ||
    //   isEmpty(productPrice)
    // ) {
    //   setError('Form is incomplete.');
    // } else {
    //   let formData = new FormData();

    //   formData.append('productImage', productImage);
    //   formData.append('productName', productName);
    //   formData.append('productDescription', productDescription);
    //   formData.append('productPrice', productPrice);

    //   createProduct(formData)
    //     .then((response) => {
    //       setProductData({
    //         productImage: null,
    //         productName: '',
    //         productDescription: '',
    //         productPrice: '',
    //       });
    //       setSuccess(response.data.successMessage);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       setError(err.response.data.errorMessage);
    //     });
    // }
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
    <div className="food-form-container">
      <div>
        <div className="">
          <form className="food-form" onSubmit={handleProductSubmit}>
            <div className="">
              <h5 className="food-form-h5">Insert New Food Item</h5>
              {/* <button className='close' data-dismiss='modal'>
								<span>
									<i className='fas fa-times'></i>
								</span>
							</button> */}
            </div>
            <div className="">
              {error && showErrorMsg(error)}
              {success && showSuccessMsg(success)}

              <Fragment>
                <div className="group">
                  <input
                    type="file"
                    className="form-input"
                    onChange={handleProductImage}
                    name="productImage"
                  />
                  {/* <label>Choose File</label> */}
                </div>

                <div className="group">
                  <input
                    type="text"
                    className="form-input"
                    onChange={handleProductChange}
                    name="productName"
                    value={productName}
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
                    name="productDescription"
                    value={productDescription}
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
                    name="productPrice"
                    value={productPrice}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Price</label>
                </div>

                <div className="group">
                  <div className="form-row">
                    <div className="form-group">
                    <label className="text-secondary">Category</label>
                      <select className="form-control">
                        <option>Choose One...</option>
                        <option>Pasta</option>
                        <option>Dessert</option>
                        <option>Drinks</option>
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
