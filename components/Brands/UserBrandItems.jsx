import React from 'react'

const UserBrandItems = ({ brand }) => {
    return (
        <>
            <tr>
                <td className="td-team">
                    <img src={brand.logo} alt={brand.name}/>
                </td>
                <td>{brand.name}</td>
                <td>
                    <span className="badge success">Success</span>
                </td>
            </tr>
        </>
    )
}

export default UserBrandItems;
