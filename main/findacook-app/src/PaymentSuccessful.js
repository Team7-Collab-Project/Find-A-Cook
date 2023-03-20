import React from "react";

const PaymentSuccessful = () => {
  return (
    <>
      <div className="successBody">
        <div
          className="successCard"
          style={{
            backgroundImage: "url('./images/successCook.png')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>Payment Successful!</h2>
          <p>Well done, Kim! You have successfully taken the final step towards becoming a cook! Your payment has been received and an email containing your invoice will be sent to you shortly. Now, log in and unleash your culinary creativity to whip up some scrumptious dishes!
          </p>
          <div className="applicationButton">
            <a href="/cooklogin"><button className="applicationBtn">Login!</button></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessful;
