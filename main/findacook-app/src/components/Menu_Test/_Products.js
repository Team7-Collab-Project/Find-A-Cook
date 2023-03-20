import React, { useState, useEffect } from "react";
import "../CSS/Style.css";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import CartContext from "../../CartContext";
import { deleteProduct } from "../../redux/actions/productActions";
import { Link } from 'react-router-dom';


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

       {/* EDIT PAGE CODE */}
       
       {/* <Link
       to={`/edit/product/${product._id}`}
       type="button"
       className="btn btn-secondary btn-sm">
        <i className="far fa-edit pr-1"></i>
        Edit
       </Link> */}


       {/* <button type="button" className="btn btn-danger btn-sm" onClick={() => dispatch(deleteProduct(product._id))}>
          <i className="far fa-trash-alt pr-1"></i>
          Delete
       </button> */}

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
