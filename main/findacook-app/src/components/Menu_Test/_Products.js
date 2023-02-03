import React, { useState } from 'react';
import '../CSS/Style.css'

const _Products = ({productItems, handleAddProduct}) => {

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
                    <div className='add'>
            <button className='addCartButton' onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
        </div>
                </div>
            ))

            }
        </div>
    )
}

export default _Products