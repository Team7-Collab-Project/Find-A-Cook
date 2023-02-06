import React, { useState } from 'react';

function CookModal() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      {showModal && (
        <div style={{ background: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
          <div style={{ background: 'white', borderRadius: 5, padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <p>Thank you for Signing up to be a cook on our platform.
To get verified and receive a badge next to your profile name and to get ahead and increase your chances of cooking and being a verified cook on Find a Cook (as soon as we launch), we recommend you do the following:
Recommended requirements.
A basic food hygiene training HACCP level 2 which you can take in 3 hours or at your own pace here.
A public liability insurance to cover you and your customer in the case of any unforeseen accidents.
Security vetting to reassure your customers here
Covid Vaccine.
Price your services depending on how long it will take you to make the quantities/portions required by the customer (Including cost of any special ingredients you may have to bring from your home and don’t need to buy whole containers, like salt and specialty seasoning). We recommend a strategic pricing that will give you an advantage over other cooks and professional chefs.
Indicate your availability on dates and times in your calendar.
Ask customer about cooking facility and utensils so you can bring yours if necessary.
Plan your meal and route accordingly after the order has been placed to maximise your time.
Provide an emergency contact with whom you can share details of your job with them.
Mandatory requirements
Cooks must register, declare, and pay any taxes due on their income from cooking here to the government.
Proof of Identity.
Proof of address.
Pay attention to all specific food requirements indicated by the customers.
Cook must be well presented (clean) and courteous to customer throughout.
Clock in once you get to the customers home and do same if they come to your home.
State all country cuisines you are good at making clearly stating all ingredients with allergens in bold.
Proceed to shop or travel to shop/customers home only after 50% payment has been made.
Take clear pictures of the state of the kitchen before beginning to cook (in-case the kitchen is not in a state where you can proceed). 
Take a clear picture of the food in the pots/pans when you finish cooking and upload to your profile.
Leave the customers home in the state you met it if not better. However, A cook is not a cleaner.
Cost of service
15% at completion will be deducted from fee charged to the customer and 85% deposited into the cooks’ account.
In the case of bridge of agreement between cook and customer by customer, unsafe and unclean kitchen where the cook cannot proceed, after review of evidence, up to 15% of the fee charged the customer could be awarded to the cook.
In a no-show case, the customer will be refunded the full deposit and it will reflect on the cooks’ profile.
In a 30+ minutes late case, the customer will reserve the right to proceed or cancel the order in which case the cook bears any losses.
Maintain all communication with the customer on the business site for monitoring and troubleshooting purposes.
Cooks will be charged a 10% fee (not 15%) from their 200th service upwards.
Please submit clear pictures of you, your meals labelled with your first name and area you will cover, which could be used to advertise your service.
Customers chosen will ideally be from the same locality in which you are, thus creating a connection to your community and, you get more assurance of where they are and how long it will take to get to them.
Let us know what would increase your experience and satisfaction of using Find a Cook.
Please follow us on Twitter and Facebook to let us know your experiences and expectations and stay updated.
Thank you and stay safe.

</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CookModal;