import React from 'react';
import Script from 'react-load-script'

let OmiseCard;




const CheckoutWithInternetbanking = ({carts}) => {
    //     const amount = carts.reduce((sum, cart) => sum + cart.qualtity * cart.product.price, 0)
    //     console.log(process.env.OMISE_PUBLIC_KEY)
    //     const  handleLoadScript = () => {
    //         OmiseCard = window.OmiseCard
    //         OmiseCard.configure({
    //             publicKey: process.env.OMISE_PUBLIC_KEY,
    //             current: 'thb',
    //             frameLabel: 'Ozone Shoppy',
    //             submitLabel: 'Pay Now!',
    //             buttonLabel: 'Pay With Omise'
    //         })
    //     }

    //     const internetbankingConfig = () => {
    //         OmiseCard.configure({
    //             defaultPaymentMethod: 'internet_banking',
    //             otherPaymentMethod: [
    //                 'alipay',
    //                 'unipay',
    //                 'net_banking'
    //             ]
    //         })
    //         OmiseCard.configureButton('#internet__banking')
    //         OmiseCard.attach()
    //     }


    // const omiseCardHandler = () => {
    //     //const { cart, user, createCreditCardcharge } = props;
    //     OmiseCard.open({
    //         frameScription: 'Invoice #8723',
    //         amount: amount * 100,
    //         onCreateTokensuccess: token => {
    //             console.log(token)
    //             //createCreditCardcharge(user.email, user.username, cart.amount, token)
    //         },
    //         onFormClosed: () => {}
    //     })
    // }


    // const handleClick = () => {
    //     internetbankingConfig()
    //     omiseCardHandler()
    // }
    return (
        <div className="own-form">
           {/* <Script url='https://cdn.omise.co/omise.js' onLoad={handleLoadScript} /> */}
            <form action="">
                <button
                    id="credit-card"
                    className="btn-payment__omise"
                    type="button"
                    // disabled={!amount}
                    // onClick={handleClick}
                >
                    Pay Now! With Internet Banking
                </button>
            </form>
        </div>
    )
}

export default CheckoutWithInternetbanking;
