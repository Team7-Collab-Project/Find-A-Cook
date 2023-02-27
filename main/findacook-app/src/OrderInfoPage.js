import React from "react";
import Navbar from "./components/Navbar/Navbar";
import _orderInfo from "./components/Orders/_orderInfo";

function OrderInfoPage() {
  return (
    <>
      <Navbar />
      <_orderInfo />
      {/* <orderInfo /> */}
    </>
  );
}

export default OrderInfoPage;
