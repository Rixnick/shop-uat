import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { MY_CARTS } from '../../graphql/Carts';
import CartItem from './CartItem';


const Carts = () => {
    const { data, loading, error } = useQuery(MY_CARTS) //
    // console.log("User Cart:", data)
    if (error) return (
        <>
            <main>
                <div className="cart__content">
                    <p className="error__card">Ooops....! Something went wrong, Plz Login try again later</p>
                </div>
            </main>
        </>
    )
    if (loading) return <p>Empty Cart Loading...</p>
    return (
        <>
            <main>
                <div className="cart__content">
                    <h2 className="dash-title">Cart Over Views</h2>
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Products Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total Anount</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.user.carts.map(cart =>
                                        <CartItem key={cart.id} cart={cart} />
                                    )
                                }
                            </tbody>
                            <tfoot>

                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>Total:</th>
                                    <th>$
                                {
                                            data.user.carts.length > 0 &&
                                            data.user.carts.reduce(
                                                (sum, cart) => sum + cart.qualtity * cart.product.price, 0
                                            )
                                        }
                                    </th>
                                    <th>
                                        <a href="/checkOut">Check Out</a>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Carts
