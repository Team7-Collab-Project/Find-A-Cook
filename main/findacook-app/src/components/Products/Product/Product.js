import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import '../../CSS/Style.css'

const Product = ({product}) => {

    // const [cart, setCart] = useState([]);

    // const addToCart = (productId) => {
    //     let newCart;
    
    //     if (cart.length > 0) {
    //       const productIds = cart.map((item) => item.productId);
    
    //       if (productIds.includes(productId)) {
    //         alert("Product is already added in the cart..!");
    //       } else {
    //         newCart = [...cart, { productId }];
    //       }
    //     } else {
    //       newCart = [{ productId }];
    //     }
    
    //     setCart(newCart);
    //   };
    
    return (
        <div className=''>
            <div className='cards'>
            <div>
                        <img
                        className='product-image'
                        src={product.images}
                       />
                    </div>
                {product.name}
                <div className='cardContent'>
                    <h5 className='product-name'>
                    {product.name}
                    </h5>
                    <h5 >
                    {product.price}
                    </h5>
              
                {/* <p>
                    {product.description}
                </p> */}
                </div>
                <div className='cardAction'>
                <button title='Add To Cart'><FaShoppingCart /></button>
                </div>
            </div>
        </div>
    )
}

export default Product;