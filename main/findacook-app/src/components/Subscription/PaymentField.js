import React from "react";

const PaymentField = () => {
  return (
    <>
    <div className="payment-body">
    <div className="payment-main">
      <div className="payment-container">
        <form>
          <div className="row">
            <div className="field">
              <input
                id="email-address"
                className="input empty"
                type="text"
                placeholder=""
                required=""
              />
              <label for="email-address">Email</label>
              <div className="baseline"></div>
            </div>
          </div>

          <div className="row">
            <div className="field">
              <input 
              id="card-number"
              className="input empty"
              required=""
              />
              <label for="card-number">Card Number</label>
            </div>
          </div>

          {/* <div class="row">
            <div class="field">
              <div id="card-number" class="input empty"></div>
              <label for="card-number">Card Number</label>
              <div class="baseline"></div>
            </div>
          </div> */}

          <input 
          type="submit" 
          value="Pay Now"
          className="payment-button" 
          />
        </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default PaymentField;


// cell example example2   