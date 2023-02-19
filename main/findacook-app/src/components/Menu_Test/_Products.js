import React, { useState } from "react";
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
  // const dispatch = useDispatch();

  // const handleAddToCart = () => {
  // 	dispatch(addToCart(productItems));
  // };


  const dispatch = useDispatch();

  return (
    <>
      <div className="col-md-4 my-3">
        <div className="card h-100">
   
           <div>
           <img className="img-fluid w-100" src={`/uploads/${product.filename}`} />
           </div>
           <div>
                    <h3 className='card-body text-center'>{product.item_name}</h3>
                    </div>
                    <div className='product-price'>{product.price.toLocaleString("en-GB", {style:"currency", currency:"EUR"})}</div>
       
       <p>
        {product.product_description.length > 60
            ? product.product_description.substring(0, 60) + '...'
            : product.product_description.substring(0, 60)
        }
       </p>
       <Link
       to={`/edit/product/${product._id}`}
       type="button"
       className="btn btn-secondary btn-sm">
        <i className="far fa-edit pr-1"></i>
        Edit
       </Link>
       <button type="button" className="btn btn-danger btn-sm" onClick={() => dispatch(deleteProduct(product._id))}>
          <i className="far fa-trash-alt pr-1"></i>
          Delete
       </button>
        </div>
        
      </div>
    </>
  );
};

export default _Products;
