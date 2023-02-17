import React, { useState } from "react";
import "../CSS/Style.css";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import CartContext from "../../CartContext";

// const _Products = ({productItems, handleAddProduct}) => {
const _Products = ({ product }) => {
  // const product = props.product;
  // const cart = useContext(CartContext);
  // const productQuantity = cart.getProductQuantity(productItems.id);
  // console.log(cart.items);

  // THIS CODE WORKS!! JUST COMMENTED OUT FOR NOW
  // const dispatch = useDispatch();

  // const handleAddToCart = () => {
  // 	dispatch(addToCart(productItems));
  // };

  return (
    <>
      <div className="products">
        <div className="cards">
          <a href="#!">
            <img className="product-image" src={`/uploads/${product.filename}`} />
          </a>
        </div>
      </div>
    </>
  );
};

export default _Products;
