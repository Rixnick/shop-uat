import React from 'react';

const AcItems = ({ bankac }) => {
    return (
        <>
            <tr>
                <td className="td-team">
                    <img src={bankac.qrcodeUrl} alt=""/>
                </td>
                <td>{bankac.bankName}</td>
                <td>{bankac.accountName}</td>
                <td>{bankac.accountNo}</td>
                <td className="td-team">
                    <img src={bankac.qrcodeUrl} alt=""/>
                </td>
                <td>
                    <span className="badge success">Edit</span>
                </td>
            </tr>
        </>
    )
}

export default AcItems;
