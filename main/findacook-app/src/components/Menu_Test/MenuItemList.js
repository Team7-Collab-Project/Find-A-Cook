//import React from 'react';
import React, { useState } from 'react';
import '../CSS/Style.css'
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

function MenuListItem() {

    const [quantity, setQuantity] = useState(1);

    if(quantity == 0){
        setQuantity(1);
    }

    return(
        <>
        <img id="cdogs" src="../images/corndogs.jpg" />
        <div className='menu-quick'>
            <h3>American Corndogs</h3>
            <h5>4 Crunchy Corndogs w/ Ketchup and Mustard</h5>
            <h6>€10</h6>
            <div className='quantityDiv'>
            <button className='btn-quantity-minus' onClick={() => setQuantity(quantity - 1)}>
                <FaMinusCircle />
            </button>
            <p className='quantity'>{quantity}</p>
            <button className='btn-quantity-plus' onClick={() => setQuantity(quantity + 1)}>
                <FaPlusCircle />
            </button>
            </div>
        </div>
        </>
    )
}

export default MenuListItem