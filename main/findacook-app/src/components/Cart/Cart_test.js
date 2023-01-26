import React, { useState } from 'react';
import '../CSS/Style.css'

function Cart_test() {

    return(
        <div className='cartContainer'>
            <div className='cartLeftDiv'>
                <table className='cartTable'>
                    <tr className='cartTr'>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    </tr>
                    <tr className='cart-tr'>
                        <td>
                            <div className='imgContainer'>
                            <img id="cartCorndog" src="../images/corndogs.jpg" />
                            </div>
                        </td>
                        <td>
                            <span className='cartNameSpan'>Corndogs</span>
                        </td>
                        <td>
                            <span className='cartPriceSpan'>€10</span>
                        </td>
                        <td>
                            <span className='cartQuantitySpan'>2</span>
                        </td>
                        <td>
                            <span className='cartTotalPriceSpan'>€20</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='cartRight'>
                <div className='cartWrapper'>
                    <h2 className='cartTitle'>CART TOTAL</h2>
                    <div className='totalText'>
                    <b className='totalTextTitle'>Subtotal:</b>€20
                </div>
                <div className='totalText'>
                    <b className='totalTextTitle'>Discount:</b>€0.00
                </div>
                <div className='totalText'>
                    <b className='totalTextTitle'>Total:</b>€20
                </div>
                <button className='cartButton'>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    )
}

export default Cart_test
