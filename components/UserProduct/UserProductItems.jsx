import React from 'react';

const UserProductItems = ({ product }) => {
    return (
        <>
            <tr>
                <td className="td-team">
                    <img src={product.imageUrl} alt={product.name} width='80px' />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.stockqty}</td>
                <td>Package</td>
                <td>
                    <span className="badge success">...</span>
                </td>
            </tr>
        </>
    )
}

export default UserProductItems
