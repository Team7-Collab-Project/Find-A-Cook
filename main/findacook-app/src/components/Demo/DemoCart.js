import { CartContext } from "../../CartContext";
import { useContext } from "react";
import { getProductData } from "../../DemoProduct";

function DemoCart(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            {/* <h3>{productData.name}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.price).toFixed(2) }</p>
            <button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</button>
            <hr></hr> */}
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
                            <img id="cartCorndog" src={productData.image} />
                            </div>
                        </td>
                        <td>
                            <span className='cartNameSpan'>{productData.name}</span>
                        </td>
                        <td>
                            <span className='cartPriceSpan'>{productData.price}</span>
                        </td>
                        <td>
                            <span className='cartQuantitySpan'>{quantity}</span>
                        </td>
                        <td>
                            <span className='cartTotalPriceSpan'>€{ (quantity * productData.price).toFixed(2) }</span>
                        </td>
                    </tr>
                    <button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</button>
                </table>
            </div>
            </div>
        </>
    )
}

export default DemoCart;