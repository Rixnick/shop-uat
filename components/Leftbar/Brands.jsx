import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_BRANDS } from '../../graphql/Brands';


const Brands = () => {
    const { data, loading, error } = useQuery(QUERY_BRANDS)
    // console.log("Brands: ", data)

    if (error) return <p>Ooops....! Something went wrong, Plz try again later</p>
    if (loading) return <p>loading...</p>
    return (
        <div>
            <select>
            <option disabled>Select Brands</option>
                {
                    data.brands.map(brand => (                            
                            <option key={brand.id} value={brand.id}>{brand.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Brands;
