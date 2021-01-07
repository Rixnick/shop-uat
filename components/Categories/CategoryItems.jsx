import React from 'react'



const CategoryItems = ({ category }) => {
    return (
        <>
            <tr>
                <td className="td-team">
                    <img src={category.imageUrl} alt={category.name}/>
                </td>
                <td>{category.name}</td>
                {/* <td>{category.desc}</td> */}
                <td>
                    <span className="badge success">Success</span>
                </td>
            </tr>
        </>
    )
}

export default CategoryItems;
