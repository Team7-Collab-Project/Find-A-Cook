import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/productActions";
import { getCategories } from "../../redux/actions/categoryActions";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const EditProduct = () => {
  const { productId } = useParams();
  console.log("id 2", productId);

  // const productId = match.params.productId;

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const [filename, setFilename] = useState(null);
  const [category, setCategory] = useState("");
  const [product_description, setProduct_description] = useState("");
  const [item_name, setItem_name] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (!product) {
      dispatch(getProduct(productId));
      dispatch(getCategories());
    } else {
      setFilename(product.filename);
      setCategory(product.category);
      setProduct_description(product.product_description);
      setItem_name(product.item_name);
      setPrice(product.price);
    }
  }, [dispatch, productId, product]);

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    setFilename(image);
  };

  const handleProductSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('filename', filename);
    formData.append('category', category);
    formData.append('product_description', product_description);
    formData.append('item_name', item_name);
    formData.append('price', price);

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    await axios.put(`/api/product/${productId}`, formData, config)
        .then(res => {
            console.log('success: ', res);
        }).catch(err => {
            console.log(err);
        })
  };

  return (
    <>
      <Fragment>
        <Navbar />
        <div className="food-form-container">
          <div>
            <div className="">
              <div>
                <Link to="/admin">
                  <span>Go Back</span>
                </Link>
              </div>
              <form
                className="food-form"
                // action="/upload"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="">
                  <h5 className="food-form-h5">Update Food</h5>
                  {/* <button className='close' data-dismiss='modal'>
								<span>
									<i className='fas fa-times'></i>
								</span>
							</button> */}
                </div>
                <div className="">
                  <Fragment>
                    <div className="group">
                      <input
                        type="file"
                        className="form-input"
                        name="filename"
                        accept="images/*"
                        hidden
                        onChange={handleImageUpload}
                      />
                    </div>

                    {filename && filename.name ? (
                      <span className="badge badge-secondary">
                        {filename.name}
                      </span>
                    ) : filename ? (
                      <img
                        className="img-thumbnail"
                        style={{
                          width: "120px",
                          height: "80px",
                        }}
                        src={`/uploads/${filename}`}
                        alt="product"
                      />
                    ) : null}

                    <div className="group">
                      <input
                        type="text"
                        className="form-input"
                        name="item_name"
                        value={item_name}
                        onChange={(e) => setItem_name(e.target.value)}
                      />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label>Name</label>
                    </div>

                    <div className="group">
                      <textarea
                        type="textarea"
                        className="form-input"
                        name="product_description"
                        value={product_description}
                        onChange={(e) => setProduct_description(e.target.value)}
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
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label>Price</label>
                    </div>

                    <div className="group">
                      <div className="form-row">
                        <div className="form-group">
                          <select
                            className="form-control"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
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
      </Fragment>
    </>
  );
};

export default EditProduct;
