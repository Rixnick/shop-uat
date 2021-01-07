import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {  QUERY_CATEGORIES  } from '../../graphql/Category';

const Categories = () => {
    const {data, loading, error} = useQuery(QUERY_CATEGORIES);
    //console.log("Categories:", data)
    if (error) return <p>Ooops....! Something went wrong, Plz try again later</p>
    if (loading) return <p>loading...</p>
    return (
        <div>
            <select>
                <option disabled>Select Categories</option>
                {
                    data.categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Categories
