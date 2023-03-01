import React, { useState, useEffect } from "react";
import "../CSS/Style.css";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import CartContext from "../../CartContext";
import { deleteProduct } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

// const _Products = ({productItems, handleAddProduct}) => {
const _Products = ({ product }) => {
  // const product = props.product;
  // const cart = useContext(CartContext);
  // const productQuantity = cart.getProductQuantity(productItems.id);
  // console.log(cart.items);

  // THIS CODE WORKS!! JUST COMMENTED OUT FOR NOW
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // const dispatch = useDispatch();

  return (
    <>
      {/* <div className="cards">

<div className="card">
  <div className="card__image-holder">
  <img className="imageDisplay" src={`/uploads/${product.filename}`} />
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>

       
        <small> {product.item_name}</small>
        <small> {product.price}</small>

  </div>
  <div className="card-flap flap1">
    <div className="card-description">
    {product.product_description.length > 60
            ? product.product_description.substring(0, 60) + '...'
            : product.product_description.substring(0, 60)
        }
    </div>
    <div className="card-flap flap2">
      <div className="card-actions">
        <a href="#" className="btn">Read more</a>
      </div>
    </div>
  </div>
</div>



</div> */}

      <div className="productBody">
        <div class="theProductsContainer">
          <div class="products">
            <div class="product">
              <div class="image">
                <img src={`/uploads/${product.filename}`} alt="" />
              </div>
              <div class="namePrice">
                    <h3>{product.item_name}</h3>
                    <span>{product.price.toLocaleString("en-GB", {
                              style: "currency",
                              currency: "EUR",
                            })}</span>
                </div>
                <p>    {product.product_description.length > 60
            ? product.product_description.substring(0, 60) + '...'
            : product.product_description.substring(0, 60)
        }</p>
                        <div class="read">
                        <Link
								to={`/product/${product._id}`}
								type='button'
								className='productButton'
							>
								Read More
							</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default _Products;
