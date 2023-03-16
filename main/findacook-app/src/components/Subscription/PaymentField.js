import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentField = (props) => {
  const plans = [
    {
      name: "Cook Subscription",
      price_id: "price_1MiyTuDYuzoeBKxGwv312odT",
      price_for_user: "€200 / year",
    },
  ];

  const [customerId, setCustomerId] = useState(null);
  const [customerEmailID, setCustomerEmailID] = useState(null);
  const [createCustomerButtonText, setCreateCustomerButtonText] =
    useState("Create Customer");
  let createCustomer = () => {
    setCreateCustomerButtonText(
      "Talking to Stripe to create customer. Please wait.."
    );
    let data = {
      customerEmailId: customerEmailID,
    };
    fetch("http://localhost:3001/create_customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setCustomerId(data.customerId);
        props.updateCustomerIdFunction(data.customerId);
        setCreateCustomerButtonText("Done! Customer Created :-)");
      });
  };

  const checkout = (priceId) => {
    let data = {
      priceId: priceId,
      customerId: props.customerId,
    };
    fetch("http://localhost:3001/create_checkout_link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.replace(data.url);
      });
  };

  return (
    <>
      <div className="payment-body">
        <div class="payment-card">
          <div class="payment-card-header">
            <img src="./images/payment_cook.jpg" alt="" />
          </div>
          <div class="payment-card-body">
            <div class="payment-card-title">Order Summary</div>
            <div class="payment-card-text">
              You are one step closer to being able to offer tasty dishes to the
              world!
            </div>
            <div class="payment-card-plan">
              <div class="payment-card-plan-img">
                <img src="./images/smallPotIcon.png" alt="" />
              </div>
              <div class="payment-card-plan-text">
                <div class="payment-card-plan-title">Annual Plan</div>
                <div class="payment-card-plan-price">€200/year</div>
              </div>
            </div>

            {plans.map((plan) => {
              return (
                <>
                  <div class="card-payment-button">
                    <button onClick={() => checkout(plan.price_id)}>
                      Proceed to Payment
                    </button>
                  </div>
                </>
              );
            })}

            <div class="card-cancel-button">
              <a href="/">
                <button>Cancel Order</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentField;
