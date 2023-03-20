import React from "react";

const PaymentUnsuccessful = () => {
  return (
    <>
      <div className="successBody">
        <div
          className="successCard"
          style={{
            backgroundImage: "url('./images/badSuccess.png')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>Oh No! Your Payment Was Unsuccessful!</h2>
          <p>Something went wrong! Please try again later. For now, return to Find A Cook Homepage.
          </p>
          <div className="applicationButton">
            <a href="/"><button className="applicationBtn">Return To Homepage</button></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentUnsuccessful;
