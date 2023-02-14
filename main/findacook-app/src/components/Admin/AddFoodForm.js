import React, { useState, Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { createProduct } from "../../api/product";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { useDispatch } from "react-redux";
import { getCategories } from "../../api/category";
import { createProduct } from "../../api/product";
import axios from "axios";

const AddFoodForm = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    productImage: null,
    productName: "",
    productDescription: "",
    productCategory: "",
    productPrice: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
        console.log("Categories: ", data);
        // const response = await getCategories();
        // setCategories(response.formData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const {
    productImage,
    productName,
    productDescription,
    productCategory,
    productPrice,
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

    if (productImage === null) {
      setError("Please select an image.");
    } else if (
      isEmpty(productName) ||
      isEmpty(productDescription) ||
      isEmpty(productPrice)
    ) {
      setError("All fields are required.");
    } else if (isEmpty(productCategory)) {
      setError("Please select a category");
    } else {
      let formData = new FormData();

      formData.append("productImage", productImage);
      formData.append("productName", productName);
      formData.append("productDescription", productDescription);
      formData.append("productPrice", productPrice);
      formData.append("productCategory", productCategory);

      createProduct((formData));
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
                      <select className="form-control">
                        <option value="">Choose One...</option>
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
