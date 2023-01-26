import React from 'react';
import '../CSS/Style.css'

function _orderInfo() {

    const status = 0;

    const statusClass = (index) => {
        if (index - status < 1) return 'done';
        if (index - status === 1) return 'inProgress';
        if (index - status > 1) return 'undone';
    };

    return(
        <div className='orderContainer'>
            <div className='orderLeft'>
            <div className='rows'>
            <table className='orderTable'>
                    <tr className='orderTr'>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                    </tr>
                    <tr className='order-tr'>
                        <td>
                            <span className='orderID'>810257</span>
                        </td>
                        <td>
                            <span className='customerName'>John Doe</span>
                        </td>
                        <td>
                            <span className='address'>The Mall, Meath</span>
                        </td>
                        <td>
                            <span className='cartTotalPriceSpan'>€20</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='rows'>
                <div className={statusClass(0)}>
                <img src="../images/paid.png" width={30} height={30} />
                <span>Payment</span>
                <div className='checked'>
                <img src="../images/checked.png" width={20} height={20} />
                </div>
                </div>

                <div className={statusClass(1)}>
                <img src="../images/bake.png" width={30} height={30} />
                <span>Preparing</span>
                <div className='checked'>
                <img src="../images/checked.png" width={20} height={20} />
                </div>
                </div>

                <div className={statusClass(2)}>
                <img src="../images/bike.png" width={30} height={30} />
                <span>On The Way</span>
                <div className='checked'>
                <img  src="../images/checked.png" width={20} height={20} />
                </div>
                </div>

                <div className={statusClass(3)}>
                <img src="../images/delivered.png" width={30} height={30} />
                <span>Delivered</span>
                <div className='checked'>
                <img  src="../images/checked.png" width={20} height={20} />
                </div>
                </div>
            </div>
            </div>
            <div className='orderRight'>
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
                <button disabled className='orderButton'>PAID</button>
                </div>
            </div>
        </div>
    )
}

export default _orderInfo