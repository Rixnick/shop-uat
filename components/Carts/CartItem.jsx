import React from 'react';

const CartItem = ({ cart }) => {
    return (
        <>
            <tr>
                <td>
                    <img src={cart.product.imageUrl} alt={cart.id}/>
                </td>
                <td>{cart.product.name}</td>
                <td>${cart.product.price}</td>
                <td>{cart.qualtity}</td>
                <td>${cart.product.price * cart.qualtity}</td>
                <td>
                    <span className="badge success">...</span>
                </td>
            </tr>
        </>
    )
}

export default CartItem;
