import React from 'react';
import CheckOutList from './CheckOutList';
import CheckoutWithCreditCard from './CheckoutWithCreditCard';

import { useQuery } from '@apollo/react-hooks';
import { MY_CARTS } from '../../graphql/Carts';
import CheckoutStripe from './CheckoutStripe';
import CheckoutWithInternetbanking from './CheckoutInternetBanking';


const CheckOut = () => {
    const { data, loading, error } = useQuery(MY_CARTS) //
    // console.log("User Cart:", data)
    if (error) return <p>Ooops....! Something went wrong, Plz Login try again later</p>
    if (loading) return <p>Empty Cart Loading...</p>

    return (
        <>
           <div className="checkout-content">
                <main>
                    <section className="recent-checkout">
                        <div className="checkout-grid">
                            <CheckOutList carts={data.user.carts} />
                            <div className="checkout-card">
                                <h3 className="bill-title">Billing Information:</h3>
                                <div className="checkout-card-item">
                                    <div className="checkout-header-cards">
                                        <div className="checkout-header-card-single">
                                            <div className="card-body">
                                                <span className="ti-briefcase"></span>
                                                <div>
                                                    <h5>Master Card</h5>
                                                    <h4>$30,405.00</h4>
                                                </div>
                                            </div>
                                            <div className="card-footer">   
                                                <a href="">View all</a>
                                            </div>
                                        </div>
                                        <div className="checkout-header-card-single">
                                            <div className="card-body">
                                                <span className="ti-reload"></span>
                                                <div>
                                                    <h5>BCEL Account</h5>
                                                    <h4>$21,249.00</h4>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <a href="">View all</a>
                                            </div>
                                        </div>
                                        <div className="checkout-header-card-single">
                                            <div className="card-body">
                                                <span className="ti-check-box"></span>
                                                <div>
                                                    <h5>Paypal Account</h5>
                                                    <h4>$74,905.00</h4>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <a href="">View all</a>
                                            </div>
                                        </div>
                                        <div className="checkout-header-card-single">
                                            <div className="card-body">
                                                <span className="ti-book"></span>
                                                <div>
                                                    <h5>Union Pay</h5>
                                                    <h4>$174,905.00</h4>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <a href="">View all</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="checkout-info-cards">
                                    <div className="summary-checkout-single">
                                        <h3>1. Billing Address</h3>
                                        <form action="" method="post">
                                            <div className="info-state">
                                                <label htmlFor="fullname">Full Name:</label>
                                                <input type="text" name="fullname" placeholder="Enter Fullname" />
                                                <label htmlFor="address">Address:</label>
                                                <input type="text" name="address" placeholder="Enter Address" />
                                                <label htmlFor="city">City:</label>
                                                <input type="text" name="city" placeholder="NY, New York" />
                                                <label htmlFor="contact">Contact No:</label>
                                                <input type="text" name="contact" placeholder="Contact No." />
                                            </div>
                                            <div className="select-state">
                                                <label htmlFor="state">Province:</label>
                                                <input type="text" name="state" placeholder="Enter Province" />
                                                <label htmlFor="zip">Zip Code:</label>
                                                <input type="text" name="zip" placeholder="Zip Code" />
                                            </div>
                                            <div className="submit-state">
                                                <button className="btn__cancel" type="">Back Cart</button>
                                                <button  className="btn__submit" type="submit" >Check Out</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="summary-checkout-single">
                                        <h3>2. Credit Card No</h3>

                                        <CheckoutStripe />
                                        <CheckoutWithCreditCard carts={data.user.carts} />
                                        <CheckoutWithInternetbanking carts={data.user.carts} />
                                        {/* <form action="" method="post">
                                            <div className="credit-info">
                                                <label htmlFor="card_name">Card Name:</label><br />
                                                <input type="text" name="card_name" placeholder="Card Name" />
                                                <label htmlFor="card_no">Card No:</label>
                                                <input type="text" name="card_no" placeholder="Card No." />
                                            </div><hr/>
                                            <div className="credit-state">
                                                <div>
                                                    <label htmlFor="state">CVV No</label><br />
                                                    <input type="text" name="cvv" placeholder="CVV" />
                                                </div>
                                                <div>
                                                    <label htmlFor="zip">Exp Month</label>
                                                    <input type="text" name="month" placeholder="Month" />
                                                </div>
                                                <div>
                                                    <label htmlFor="zip">Exp Year</label>
                                                    <input type="text" name="year" placeholder="Year" />
                                                </div>
                                            </div>
                                        </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>  
        </>
    )
}

export default CheckOut;
