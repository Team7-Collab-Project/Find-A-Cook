
import React from 'react';
import {useStripe, useElements, CardElement, Elements} from '@stripe/react-stripe-js';
import StripeCardElement from './components/Subscription/StripeCardElement'
import PaymentField from './components/Subscription/PaymentField'
import { loadStripe } from '@stripe/stripe-js';


const apiKey = 'STRIPE_PUBLIC_API_KEY';
const stripePromise = loadStripe(apiKey)


const SubscriptionPage = () => {
    return(
        <>
        <Elements stripe={stripePromise}>
    <PaymentField />
    </Elements>
        </>
    )
}


export default SubscriptionPage