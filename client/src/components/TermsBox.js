import { useState, useRef } from 'react';


function TermsandConditions({submitCode}) {
    const [isDisabled, setIsDisabled] = useState(true);
    const termsBoxRef = useRef(null);

    const handleScroll = () => {
        if (termsBoxRef.current.scrollTop >= 1270){
            setIsDisabled(false);
        }
    }

    return (
        <div>
          <div id="termsBox" ref={termsBoxRef} onScroll={handleScroll}>
            {/* content of the termsBox */}
            <div id="termsContent">
                    <b><u>A Cook:</u></b>
                    <br />
                    <b>Registration of an account and basis of a contract.</b>  Will the user subscription be free of charge?   How will the T&Cs be accepted [perhaps by ticking a tick box to confirm acceptance].  At what point will a binding contract be formed between you and the Cook? [perhaps this will be when you send default account log in details].
                    <br />
                    <b>Term:</b> Will there be a specific length of time for an user subscription.   Automatic renewal of user subscriptions at the end of the Term?
                    <br />
                    <b>App restrictions:</b> The Cook shall not access, store, distribute or transmit any viruses, or any material including any data, during the course of its use of the services that (i) is unlawful, harmful, threatening, defamatory, obscene, infringing, harassing or racially or ethnically offensive; (ii) facilitates illegal activity; (iii) depicts sexually explicit images; (iv) promotes unlawful violence; (v) is discriminatory based on race, gender, colour, religious belief, sexual orientation, disability, or any other illegal activity; or (vi) causes damage or injury to any person or property. <b>Find a Cook reserves the right, without liability to the Cook, to disable the Cooks access to any material that breaches the provisions of this clause.</b>
                    <br />
    	            <b>Other restrictions:</b> The Cook shall not attempt to copy, modify, duplicate, create derivative works from, frame, mirror, republish, download, display, transmit, or distribute all or any portion of the App  in any form or media or by any means etc.
                    <br />
                    <b>Disclaimer of warranties: </b>  The services are provided on an "as-is" basis and all warranties and conditions are excluded to the fullest extent permitted by law. Find a Cook does not guarantee that the app is free from mistakes, malware, errors or other issues that could potentially damage a user;  that the services and/or the information obtained by the Cook through the services will be accurate or meet the Cooks requirements.
                    <br />
                    <b>Termination:</b>
                    <br />
                    <b>Termination for cause:</b> Either party may terminate the contract on notice to the other party on breach of the T&Cs and such breach is not cured within thirty (30) days after the non-breaching party provides notice of the breach.  Find A Cook may terminate the contract immediately on notice to the Cook if we reasonably believe that the services are being used by the Cook in violation of applicable law.
                    <br />
                    <b>Termination without cause:</b> The Cook may terminate its subscriptions at any time on notice.  Method required for cancelling - via email, written mail, online form, through a user account menu, etc. When does the cancellation take place - immediately, in 24 hours, etc.? What happens after cancellation, is all user data deleted immediately? licence to use the App will terminate right away. Find A Cook will pay outstanding sums due under the T&Cs. Find A Cook may terminate without cause, but on (30) days’ prior written notice to the Cook.
                    <br />
                    <b>Limiting Liability:</b> Find A Cooks liability limited to the fullest extent permitted by law. Overall liability capped to the amount of commission paid to the Cook/ price of meal.
                    <br />
                    <b>Intellectual Property Rights: </b>The Cook acknowledges and agrees that the Provider and/or its licensors own all intellectual property rights in the Services and the Software. The T&C's do not grant the Cook any rights to, or in, patents, copyrights, database rights, trade secrets, trade names, trade marks (whether registered or unregistered), or any other rights or licences in respect of the services and the App.
                    <br />
                    <b>Privacy Policy:</b> A Privacy Policy will be required for data protection and should be provided to a Cook with the T&Cs.
                    <br />
                    <br />
                    <b><u>A Customer:</u></b>
                    <br />
                    Find a Cook provides a way for Customers to communicate orders ("Orders") for products ("Products") to Cooks as displayed on the app. <b>The legal contract for the supply and purchase of Products is between Customer and the Cook and Find A Cook will conclude the sale of Products on behalf of, and agent for, the Cook in all cases.</b>
                    <br />
                    <b>Registration of an account and basis of a contract. </b> Will this user subscription be free of charge?   How will the T&Cs be accepted [may be by ticking a tick box to confirm acceptance].  At what point will a binding contract be formed? [perhaps this will be on receipt of an Order confirmation via email].
                    <br />
                    <b>Amending or cancelling an Order:</b>  Once an order is submitted and payment has been authorised, a Customer will not be entitled to change or cancel your Order, nor entitled to a refund.  If a Customer wants to change or cancel an Order they must contact the Cook directly.
                    <br />
                    <b>Payment:</b>  Prices will be as quoted on the App. These prices include VAT and all other service/ delivery costs (where applicable).
                    <br />
                    <b>Limiting Liability: </b>Find A Cooks liability limited to the fullest extent permitted by law. Overall liability capped to the price paid for any service.
                    <br />
                    <b>Complaints or feedback:</b> In the event that a Customer is dissatisfied with the quality of any products or the service provided by a Cook, they should consider providing feedback in the form of ratings, comments and reviews on the app (together, "Reviews") to reflect their experience. The Reviews are an important part of Find A Cooks quality control process.
                    <br />
                    <b>Compensation: </b>If a Customer is dissatisfied with the quality of any products/service provided by a Cook and wishes to seek a refund, a proportionate price reduction or any other compensation, the Customer should contact the Cook directly to lodge a complaint.  Please note, however, that the legal contract for the supply and purchase of products is between the Customer and the Cook. Find A Cook has no control over Cooks and the quality of the products/service that they provide, and have no responsibility or liability for providing, any compensation to a Customer on behalf of any Cook.
                    <br />
                    <b>See above for disclaimer of warranties, app restrictions, termination, intellectual property, data protection.</b>
                </div>
            </div>
            <br />
            <div id="belowTerms">
                <input id="agree" type="checkbox" name="agree" value="agree" disabled={isDisabled} required></input>
                <label id="agreeLbl">I agree to the Terms & Conditions</label>
                <br />
                <input className="btn" id="termsSubmitBtn" type="submit" value="Submit" disabled={isDisabled}></input>
            </div>
        </div>
    );
}
export default TermsandConditions;