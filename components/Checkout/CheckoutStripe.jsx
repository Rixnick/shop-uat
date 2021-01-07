import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });
        if(!error){
            const { id } = paymentMethod;
            console.log(paymentMethod)
        }
    }


    return <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" className="btn_payment__stripe" disabled={!stripe}>
            Pay Now!
        </button>
    </form>
}

const CheckoutStripe = () => {
    // console.log(process.env.STRIPE_PUBLIC_KEY)
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    )
}

export default CheckoutStripe;
