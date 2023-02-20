import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../CSS/Style.css";

const Cart_test = () => {
  const { cart } = useSelector((state) => state.cart);

  const handleGoBackBtn = () => {};

  return (
    <>
      <div className="cartContainer">
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
                <table className='cartTable'>
                    <thead>
                    <tr className='cartTr'>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                        {cart.map(product => (
                            <tr className='cart-tr'>
                        <td>
                            <div className='imgContainer'>
                            <img id="cartCorndog" src={`/uploads/${product.filename}`} />
                            </div>
                        </td>
                        <td>
                            <span className='cartNameSpan'>{product.item_name}</span>
                        </td>
                        <td>
                            {' '}
                            <span className='cartPriceSpan'>{product.price.toLocaleString("en-GB", {style:"currency", currency:"EUR"})}</span>
                        </td>
                        <td>
                            <span className='cartQuantitySpan'>{product.count}</span>
                        </td>
                        <td>
                            {' '}
                            <button type="button">
                                Delete
                            </button>
                        </td>
                            </tr>
                        ))}
                    </tbody>
                    {/* <tr className='cart-tr'>
                        <td>
                            <div className='imgContainer'>
                            <img id="cartCorndog" src="../images/corndogs.jpg" />
                            </div>
                        </td>
<td>
                            <span className='cartNameSpan'>Corndogs</span>
                        </td>
                        <td>
                            <span                        span className='cartPriceSpan'>€10</span>
                        </td>
                        <td>
                            <span className='cartQuantitySpan'>2</span>
                        </td>
                        <td>
                            <span className='cartTotalPriceSpan'>€20</span>
                        </td>
                    </tr> */}
                </table>
                <div className='cartRight'>
                <div className="cartWrapper">
                    <h2 className="cartTitle">CART TOTAL</h2>
                    <div className="totalText">
                    <b className="totalTextTitle">Subtotal:</b>
                    </div>
                    <div className="totalText">
                    <b className='totalTextTitle'>Discount:</b>
                    </div>
                    <div className="totalText">
                    <b className='totalTextTitle'>Total:</b>€20
                    </div>
                    <button className='cartButton'>CHECKOUT NOW!</button>
                </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Cart_test;
