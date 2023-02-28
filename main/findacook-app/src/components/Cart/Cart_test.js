import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../CSS/Style.css";
import { ADD_TO_CART } from "../../redux/constants/cartConstants";
import { deleteFromCart } from "../../redux/actions/cartActions";
import { Link, useNavigate } from "react-router-dom";

const Cart_test = () => {
  const { cart } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const handleGoBackBtn = () => {};

  const dispatch = useDispatch();

  const handleQtyChange = (e, product) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    cart.forEach((cartItem) => {
      if (cartItem._id === product._id) {
        cartItem.count = e.target.value;
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  };

  const handleCheckout = (evt) => {
    navigate("/shipping");
  };

  return (
    <>
      <div className="small-container cart-page">
        <table className="cartTable">
          <tr className="">
            <th>Name</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          {cart.map((product) => (
            <tr className="">
              <td>
                <div className="cart-info">
                  <img id="cartImg" src={`/uploads/${product.filename}`} />
                  <div>
                    <p> {product.item_name}</p>
                    <small>
                      {" "}
                      {product.price.toLocaleString("en-GB", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </small>
                    <br />
                    <a onClick={() => dispatch(deleteFromCart(product))}>
                      Delete
                    </a>
                  </div>
                </div>
              </td>

              <td>
                <input
                  type="number"
                  min="1"
                  value={product.count}
                  onChange={(e) => handleQtyChange(e, product)}
                ></input>
              </td>

              <td>
              €
              {cart
                  .filter(item => item.item_name === product.item_name)
                  .reduce(
                    (currentSum, currentCartItem) =>
                      currentSum +
                      currentCartItem.count * currentCartItem.price,
                    0
                  )
                  .toFixed(2)}
              </td>
            </tr>
          ))}
        </table>

        <div className="total-price">
          <table>
            <tr>
              <td>Subtotal: </td>
              <td>
                €
                {cart
                  .reduce(
                    (currentSum, currentCartItem) =>
                      currentSum +
                      currentCartItem.count * currentCartItem.price,
                    0
                  )
                  .toFixed(2)}
              </td>
            </tr>
          </table>
        </div>
        {/* <button className="cartButton" onClick={handleCheckout}>
                      CHECKOUT NOW!
                    </button> */}
      </div>

      {/* <div className="cartContainer">
        <div className="cartLeftDiv">
          <section>
            {cart.length <= 0 ? (
              <div>
                <h1>
                  No items added in cart.{" "}
                  <button onClick={handleGoBackBtn}>Go Back</button>
                </h1>
              </div>
            ) : (
              <div>
                <table className="cartTable">
                  <thead>
                    <tr className="cartTr">
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => (
                      <tr className="cart-tr">
                        <td>
                          <div className="imgContainer">
                            <img
                              id="cartCorndog"
                              src={`/uploads/${product.filename}`}
                            />
                          </div>
                        </td>
                        <td>
                          <span className="cartNameSpan">
                            {product.item_name}
                          </span>
                        </td>
                        <td>
                          {" "}
                          <span className="cartPriceSpan">
                            {product.price.toLocaleString("en-GB", {
                              style: "currency",
                              currency: "EUR",
                            })}
                          </span>
                        </td>
                        <td>
                          <span className="cartQuantitySpan">
                            <input
                              type="number"
                              min="1"
                              value={product.count}
                              onChange={(e) => handleQtyChange(e, product)}
                            ></input>
                          </span>
                        </td>
                        <td>
                          {" "}
                          <button 
                          className="productButton"
                            type="button"
                            onClick={() => dispatch(deleteFromCart(product))}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
                <div className="cartRight">
                  <div className="cartWrapper">
                    <h2 className="cartTitle">CART TOTAL</h2>

                    <p className="font-weight-light text-muted border-bottom">
                      {cart.length === 1
                        ? "(1) Item"
                        : `(${cart.length}) Items`}
                    </p>
                    <p className="font-weight-bold">
                      Total: €
                      {cart
                        .reduce(
                          (currentSum, currentCartItem) =>
                            currentSum +
                            currentCartItem.count * currentCartItem.price,
                          0
                        )
                        .toFixed(2)}
                    </p>

                    <button className="cartButton" onClick={handleCheckout}>
                      CHECKOUT NOW!
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div> */}
    </>
  );
};

export default Cart_test;
