import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import _Products from "./components/Menu_Test/_Products";
import data from "./components/Data/data";
import Cart_test from "./components/Cart/Cart_test";
import Products from "./components/Products/Products";
import DemoStore from "./components/Demo/DemoStore";
import CartProvider from "./CartContext";
import Product from "./components/Products/Product/Product";

function ProductPage() {



  return (
    <>      


<Navbar />
<Product />

    </>
  );
}


export default ProductPage;
