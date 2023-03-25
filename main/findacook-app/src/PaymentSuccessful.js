import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const PaymentSuccessful = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const success = queryParams.get("success") === "true";
  const cook_email = queryParams.get("cook_email");

  useEffect(() => {
    const verifyCookEmail = async () => {
      try {
        const response = await axios.post("http://localhost:5001/cook/verify_cook", {
          cook_email: cook_email,
        });

        if (!response.data.success) {
          alert("Cook email is not valid or could not be verified");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while verifying cook email. Please try again.");
      }
    };

    if (success) {
      verifyCookEmail();
    }
  }, [success, cook_email]);

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
          {success ? (
            <>
              <h2>Payment Successful!</h2>
              <p>Well done, Kim! You have successfully taken the final step towards becoming a cook! Your payment has been received and an email containing your invoice will be sent to you shortly. Now, log in and unleash your culinary creativity to whip up some scrumptious dishes!
              </p>
              <div className="applicationButton">
                <a href="/cooklogin"><button className="applicationBtn">Login!</button></a>
              </div>
            </>
          ) : (
            <>
              <h2>Payment Unsuccessful</h2>
              <p>Sorry, your payment was unsuccessful. Please try again or contact support for assistance.</p>
              <div className="applicationButton">
                <a href="/"><button className="applicationBtn">Back to Home</button></a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessful;
