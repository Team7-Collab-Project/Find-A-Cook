
import React from 'react';
import {useStripe, useElements, CardElement, Elements} from '@stripe/react-stripe-js';
import StripeCardElement from './components/Subscription/StripeCardElement'
import PaymentField from './components/Subscription/PaymentField'
import { loadStripe } from '@stripe/stripe-js';


const apiKey = 'pk_test_51MYbfMDYuzoeBKxGNHrBdu11mDezLgwIgRkbzqvmvIP2DOsuSkGxOj15QypqcPuBa9ZP5HN2DR5SfUkadunJAK3r00jodH6ReV';
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