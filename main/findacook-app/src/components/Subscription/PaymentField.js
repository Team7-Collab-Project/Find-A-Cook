// import React, { useState } from "react";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import axios from "axios";

// const PaymentField = (props) => {
//   const plans = [
//     {
//       name: "Cook Subscription",
//       price_id: "price_1MiyTuDYuzoeBKxGwv312odT",
//       price_for_user: "€200 / year",
//     },
//   ];

//   const [customerId, setCustomerId] = useState(null);
//   const [customerEmailID, setCustomerEmailID] = useState(null);
//   const [createCustomerButtonText, setCreateCustomerButtonText] =
//     useState("Create Customer");
//   let createCustomer = () => {
//     setCreateCustomerButtonText(
//       "Talking to Stripe to create customer. Please wait.."
//     );
//     let data = {
//       customerEmailId: customerEmailID,
//     };
//     fetch("http://localhost:5001/create_customer", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setCustomerId(data.customerId);
//         props.updateCustomerIdFunction(data.customerId);
//         setCreateCustomerButtonText("Done! Customer Created :-)");
//       });
//   };

//   const checkout = (priceId) => {
//     let data = {
//       priceId: priceId,
//       customerId: props.customerId,
//     };
//     fetch("http://localhost:5001/create_checkout_link", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         window.location.replace(data.url);
//       });
//   };

//   return (
//     <>
//       <div className="payment-body">
//         <div class="payment-card">
//           <div class="payment-card-header">
//             <img src="./images/payment_cook.jpg" alt="" />
//           </div>
//           <div class="payment-card-body">
//             <div class="payment-card-title">Order Summary</div>
//             <div class="payment-card-text">
//               You are one step closer to being able to offer tasty dishes to the
//               world!
//             </div>
//             <div class="payment-card-plan">
//               <div class="payment-card-plan-img">
//                 <img src="./images/smallPotIcon.png" alt="" />
//               </div>
//               <div class="payment-card-plan-text">
//                 <div class="payment-card-plan-title">Annual Plan</div>
//                 <div class="payment-card-plan-price">€200/year</div>
//               </div>
//             </div>

//             {plans.map((plan) => {
//               return (
//                 <>
//                   <div class="card-payment-button">
//                     <button onClick={() => checkout(plan.price_id)}>
//                       Proceed to Payment
//                     </button>
//                   </div>
//                 </>
//               );
//             })}

//             <div class="card-cancel-button">
//               <a href="/">
//                 <button>Cancel Order</button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PaymentField;






// import React, { useState } from "react";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import axios from "axios";

// const PaymentField = (props) => {
//   const plans = [
//     {
//       name: "Cook Subscription",
//       price_id: "price_1MiyTuDYuzoeBKxGwv312odT",
//       price_for_user: "€200 / year",
//     },
//   ];

//   const [createCustomerButtonText, setCreateCustomerButtonText] =
//     useState("Create Customer");
//   const [cook_email, setCookEmail] = useState("");

//   const checkout = (priceId) => {
//     let data = {
//       priceId: priceId,
//       customerEmailId: cook_email,
//     };
//     axios
//       .post("http://localhost:5001/create_checkout_link", data)
//       .then((response) => {
//         window.open(response.data.url, '_self');
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <>
//       <div className="payment-body">
//         <div class="payment-card">
//           <div class="payment-card-header">
//             <img src="./images/payment_cook.jpg" alt="" />
//           </div>
//           <div class="payment-card-body">
//             <div class="payment-card-title">Order Summary</div>
//             <div class="payment-card-text">
//               You are one step closer to being able to offer tasty dishes to the
//               world!
//             </div>
//             <div class="payment-card-plan">
//               <div class="payment-card-plan-img">
//                 <img src="./images/smallPotIcon.png" alt="" />
//               </div>
//               <div class="payment-card-plan-text">
//                 <div class="payment-card-plan-title">Annual Plan</div>
//                 <div class="payment-card-plan-price">€200/year</div>
//               </div>
//             </div>
//             <div className="payment-card-email">
//               <label htmlFor="cook-email">Cook's Email:</label>
//               <input
//                 type="email"
//                 id="cook_email"
//                 name="cook_email"
//                 onChange={(e) => setCookEmail(e.target.value)}
//                 value={cook_email}
//               />
//             </div>
//             {plans.map((plan) => {
//               return (
//                 <>
//                   <div class="card-payment-button">
//                     <button onClick={() => checkout(plan.price_id)}>
//                       Proceed to Payment
//                     </button>
//                   </div>
//                 </>
//               );
//             })}

//             <div class="card-cancel-button">
//               <a href="/">
//                 <button>Cancel Order</button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PaymentField;











// import React, { useState } from "react";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import axios from "axios";

// const PaymentField = (props) => {
//   const plans = [
//     {
//       name: "Cook Subscription",
//       price_id: "price_1MiyTuDYuzoeBKxGwv312odT",
//       price_for_user: "€200 / year",
//     },
//   ];

//   const [createCustomerButtonText, setCreateCustomerButtonText] =
//     useState("Create Customer");
//   const [cookEmail, setCookEmail] = useState("");

//   const checkout = (priceId) => {
//     let data = {
//       priceId: priceId,
//       customerEmailId: cookEmail, // change to customerEmailId
//     };
//     axios
//       .post("http://localhost:5001/create_checkout_link", data)
//       .then((response) => {
//         window.open(response.data.url, '_self');
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <>
//       <div className="payment-body">
//         <div class="payment-card">
//           <div class="payment-card-header">
//             <img src="./images/payment_cook.jpg" alt="" />
//           </div>
//           <div class="payment-card-body">
//             <div class="payment-card-title">Order Summary</div>
//             <div class="payment-card-text">
//               You are one step closer to being able to offer tasty dishes to the
//               world!
//             </div>
//             <div class="payment-card-plan">
//               <div class="payment-card-plan-img">
//                 <img src="./images/smallPotIcon.png" alt="" />
//               </div>
//               <div class="payment-card-plan-text">
//                 <div class="payment-card-plan-title">Annual Plan</div>
//                 <div class="payment-card-plan-price">€200/year</div>
//               </div>
//             </div>
//             <div className="payment-card-email">
//               <label htmlFor="cook-email">Cook's Email:</label>
//               <input
//                 type="email"
//                 id="cook_email"
//                 name="cook_email"
//                 onChange={(e) => setCookEmail(e.target.value)}
//                 value={cookEmail}
//               />
//             </div>
//             {plans.map((plan) => {
//               return (
//                 <>
//                   <div class="card-payment-button">
//                     <button onClick={() => checkout(plan.price_id)}>
//                       Proceed to Payment
//                     </button>
//                   </div>
//                 </>
//               );
//             })}

//             <div class="card-cancel-button">
//               <a href="/">
//                 <button>Cancel Order</button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PaymentField;





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

  const [createCustomerButtonText, setCreateCustomerButtonText] =
    useState("Create Customer");
  const [cook_email, setCookEmail] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const checkout = async (priceId) => {
    try {
      // Verify cook's email address
      const response = await axios.post("http://localhost:5001/cook/verify_cook", {
        cook_email: cook_email,
      });
      if (response.data.success) {
        // Create checkout session
        const checkoutResponse = await axios.post("http://localhost:5001/create_checkout_link", {
          priceId: priceId,
          customerEmailId: cook_email,
        });
        // Redirect to checkout page
        window.location.href = checkoutResponse.data.url;
      } else {
        alert("Cook email is not valid or could not be verified");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
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
            <div className="payment-card-email">
              <label htmlFor="cook-email">Cook's Email:</label>
              <input
                type="email"
                id="cook_email"
                name="cook_email"
                onChange={(e) => setCookEmail(e.target.value)}
                value={cook_email}
              />
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
