import React from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import StripeCardElement from './components/Subscription/StripeCardElement'
import PaymentField from './components/Subscription/PaymentField'

const SubscriptionPage = () => {
    return(
        <>
    <PaymentField />
        </>
    )
}


export default SubscriptionPage