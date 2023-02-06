import React, { useState } from 'react';
import '../CSS/Style.css'
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import CartContext from '../../CartContext';

// const _Products = ({productItems, handleAddProduct}) => {
const _Products = ({productItems}) => {

    // const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(productItems.id);
    // console.log(cart.items);

    // THIS CODE WORKS!! JUST COMMENTED OUT FOR NOW
    // const dispatch = useDispatch();

	// const handleAddToCart = () => {
	// 	dispatch(addToCart(productItems));
	// };

    return(
        <div className='products'>
            {productItems.map((productItem) => (
                <div className='cards'>
                    <div>
                        <img
                        className='product-image'
                        src={productItem.image}
                       />
                    </div>
                    <div>
                    <h3 className='product-name'>{productItem.name}</h3>
                    </div>
                    <div className='product-price'>€{productItem.price}</div>
                    {/* <div className='add'>
            <button className='addCartButton' onClick={handleAddToCart}>Add to Cart</button>
        </div> */}
                                                <div className='add'>
            <button className='addCartButton' onClick={() => cart.addOneToCart(productItems.id)}>Add to Cart</button>
        </div>
                </div>
            ))

            }

        </div>
    )
}

export default _Products