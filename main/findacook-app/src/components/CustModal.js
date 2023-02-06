import React, { useState } from 'react';

function CustModal({ setShowModal }) {

  return (
    <div>
        <div style={{ background: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
          <div style={{ background: 'white', borderRadius: 5, padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <p>Thank you for Signing up to be a customer on Find a cook.
            We make these initial basic recommendations for every cook signing up on this platform so they could get verified by having the following on their profile:
            You can choose a cook with one or all of these:
            At least a basic food hygiene training HACCP level 2 
            A public liability insurance 
            Police vetting 
Covid Vaccinated***
Culinary specialty + Ingredients and allergens
Price of service 
Can bring own cooking utensils
Distance from customer
3.5 stars and above review from other customers
These are only recommendations. Depending on your preferences, you could still choose a cook who does not have all the recommended requirements. 
You could send in specific dietary requirements and instructions to the cook at checkout, including allergens.
Cooks will set the prices for their services and you will pay through secured and verified online money transfer platforms.
After 20 uses of Find a Cook, you get a voucher of your average spent, for a cook to come out and cook for you.
Cooks chosen will ideally be from the same locality/area in which you are, thus creating a connection to your community and, giving more assurance knowing where they come from and how long it will take to get to you.
Your obligation:
Proceed to shop or travel to shop/customers home only after 50% payment has been made.
Take clear pictures of the state of the kitchen before beginning to cook (in-case the kitchen is not in a state where you can proceed). 
Take a clear picture of the food in the pots/pans when you finish cooking and upload to your profile.
In the case of bridge of agreement between cook and customer by customer, unsafe and unclean kitchen where the cook cannot proceed, after review of evidence, up to 15% of the fee charged the customer could be awarded to the cook.
In a no-show case, the customer will be refunded the full deposit and it will reflect on the cooks’ profile.
In a 30+ minutes late case, the customer will reserve the right to proceed or cancel the order in which case the cook bears any losses.
Maintain all communication with the customer on the business site for monitoring and troubleshooting purposes.

Let us know what would increase your experience and satisfaction of using Find a Cook.
Please follow us on Twitter and Facebook to let us know your experiences and expectations and stay updated.
Thank you and stay safe.
</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
    </div>
  );
}

export default CustModal;