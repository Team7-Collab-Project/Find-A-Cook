import React, {useState, useEffect} from 'react';

import Product from './Product/Product'
import '../CSS/Style.css'

const products = [
    { id: 1, name: 'American Corndogs', description: 'American-inspired corndogs - coated frankfurter sausages in a cornmeal batter, deep-fried and served with ketchup and yellow mustard.', price: '€10', images: "../images/corndogs.jpg"},
    { id: 2, name: 'Gnocchi', description: 'One-Pan Creamy Chicken & Gnocchi.', price: '€15', images: "../images/gnocchi.jpg"}
];

const Products = () => {

// const [cart, setCart] = useState([]);

// const [products, setProducts] = useState([]);

// useEffect(() => {
//   // Fetch the data from your database here and set the products state
//   fetch('/api/products')
//     .then(res => res.json())
//     .then(data => setProducts(data))
//     .catch(error => console.error(error));
// }, []);

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

return(
    <div className='products'>
    <div>
        {products.map((product) =>(
                      <div key={product.id}>
                <Product product={product} />
            </div>
        ))}
    </div>
</div>
)
}

export default Products;