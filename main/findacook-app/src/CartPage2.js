import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import MenuListItem from "./components/Menu_Test/MenuItemList";
import Cart_test from "./components/Cart/Cart_test";
import data from "./components/Data/data";
import _Products from "./components/Menu_Test/_Products";
// import ProductPage from "./ProductPage";
// import { cartItems } from './ProductPage'
// import function from "./ProductPage";
import { productItems } from './ProductPage';


const CartPage2 = () => {
  // const [cartItems, setCartItems] = useState([]);
  // const [cartItems, setCartItems] = useState([]);
  // const { productItems } = data;
  // const [cartsVisibilty, setCartVisible] = useState(true);

  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
  };

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  return (
    <>
      <Navbar />
      <Cart_test />
      {/* <Cart_test cartItems={cartItems} /> */}
      {/* <Cart_test
        // visibilty={cartsVisibilty}
        products={productsInCart}
        // onClose={() => setCartVisible(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      /> */}


    </>
  );
};

export default CartPage2;
