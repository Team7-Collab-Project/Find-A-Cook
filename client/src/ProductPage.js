import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import DemoStore from "./components/Demo/DemoStore";
import CartProvider from "./CartContext";

function ProductPage() {



  return (
    <>      

<CartProvider>
<Navbar />
<DemoStore />
</CartProvider>


    </>
  );
}


export default ProductPage;