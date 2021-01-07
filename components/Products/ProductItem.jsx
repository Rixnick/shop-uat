import React, { useContext } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { AuthContext } from '../../contexts/AuthProvider';
import { useMutation } from '@apollo/react-hooks';
import { ADD_TO_CART } from '../../graphql/Carts';
import { MY_PRODUCTS } from '../../graphql/Products';

const ProductItem = ({prod}) => {
    const { user } = useContext(AuthContext);
    const [addToCart, { loading, error }] = useMutation(ADD_TO_CART, {
        onCompleted: data => {
            return data;
        },
        refetchQueries: [{ query: MY_PRODUCTS }]
    })
    const handleAddToCart = async (id) => {
        // console.log('product_id:', id)
        if (!user) {
            return Router.push('/signin')
        }
        await addToCart({ variables: { id } })
    }

    return (
        <div className="product-cart-single">
                <div className="produc-card-header">
                    <img src={prod.imageUrl} alt={prod.description} />
                </div>
                
                <div className="produc-card-body">
                    <h2>{prod.name}</h2>
                    <h3>${prod.price}</h3>
                </div>
                {/* <div className="card__body">
                     <p>{prod.description}</p>
                    <small>Stock: {prod.stockqty}</small>
                </div> */}
               
                <div className="produc-card-footer">
                  {
                         user && user.id === prod.user.id ?
                         <a type="button" onClick={() => Router.push('/userProducts')}>Manage</a>
                         : 
                         <>
                            <Link   href='/products/product_detail' as={`/products/${prod.id}`}>View </Link>
                            <a type="button" onClick={() => handleAddToCart(prod.id)}>{loading ? 'Processing....' : 'Buy Now!'}</a>
                         </>
                  }
                </div>
            </div>
    )
}

export default ProductItem;
