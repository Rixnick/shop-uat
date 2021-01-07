import React from 'react'

const CheckOutItems = ({item}) => {
    return (
        <>
            <tr>
                <td>{item.product.name}</td>
                <td>${item.product.price}</td>
                <td>{item.qualtity}</td>
                <td>${item.product.price * item.qualtity}</td>
            </tr>
        </>
    )
}

export default CheckOutItems
