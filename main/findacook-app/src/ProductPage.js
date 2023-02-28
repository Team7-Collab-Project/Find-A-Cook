import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import _Products from "./components/Menu_Test/_Products";
import data from "./components/Data/data";
import Cart_test from "./components/Cart/Cart_test";
import Products from "./components/Products/Products";
import DemoStore from "./components/Demo/DemoStore";
import CartProvider from "./CartContext";

function ProductPage() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems((prevState) =>
        prevState.map((item) =>
            item.id === product.id
            ? { ... item, quantity: ProductExist.quantity + 1}
            : item
        )
      );
    } else{
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  };

  const [cartsVisibilty, setCartVisible] = useState(true);

    const [productsInCart, setProducts] = useState([]);

  // };

  // const [productsInCart, setProducts] = useState(
  //   JSON.parse(localStorage.getItem("shopping-cart")) || []
  // );
  // useEffect(() => {
  //   localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  // }, [productsInCart]);

  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
  };

  // const onQuantityChange = (productId, count) => {
  //   setProducts((oldState) => {
  //     const productsIndex = oldState.findIndex((item) => item.id === productId);
  //     if (productsIndex !== -1) {
  //       oldState[productsIndex].count = count;
  //     }
  //     return [...oldState];
  //   });
  // };

  // const onProductRemove = (product) => {
  //   setProducts((oldState) => {
  //     const productsIndex = oldState.findIndex(
  //       (item) => item.id === product.id
  //     );
  //     if (productsIndex !== -1) {
  //       oldState.splice(productsIndex, 1);
  //     }
  //     return [...oldState];
  //   });
  // };

  return (
    <>      

<CartProvider>
<Navbar />
<DemoStore />
</CartProvider>


    {/* <Cart_test
        visibilty={cartsVisibilty}
        productItems={productsInCart}
        onClose={() =>
					setCartVisible(false)
				}
      /> */}
      {/* <Navbar /> */}
      {/* <DemoStore /> */}


      {/* <Products /> */}
      {/* <_Products productItems={productItems} handleAddProduct={(product) => addProductToCart(product)}/> */}

      {/* This is the last working version below */}
      {/* <_Products productItems={productItems} handleAddProduct={(product) => handleAddProduct(product, setCartItems)}/> */}



  {/* <_Products productItems={productItems} /> */}

        {/* <Cart_test cartItems={cartItems} /> */}

{/* <Cart_test
        // visibilty={cartsVisibilty}
        products={productsInCart}
        // onClose={() => setCartVisible(false)}
        // onQuantityChange={onQuantityChange}
        // onProductRemove={onProductRemove}
      /> */}
    </>
  );
}

export const { productItems } = data;
export const useCartItems = () => {
  return useState([]);
};
export default ProductPage;
