import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from '../../graphql/Products';
import ProductItem from './ProductItem';


const Products = () => {
    const { data, loading, error } = useQuery(QUERY_PRODUCTS) //, {pollInterval:3000} Add pollInterval to refresh page per second
    if (error) return <p>Ooops....! Something went wrong, Plz try again later</p>
    if (loading) return <p>loading...</p>
    return (
       <>
        <main>
            <div className="product-content">
                <div className="product-cards">
                    {
                        data.products.map(prod =>
                            <ProductItem key={prod.id} prod={prod} />
                        )
                    }
                </div>
            </div>
        </main>
       </>
    )
}

export default Products;
