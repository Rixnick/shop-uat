
import React, { useContext } from 'react'
import Router, { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_PRODUCT, MY_PRODUCTS } from '../../graphql/Products';
import { AuthContext } from '../../contexts/AuthProvider';
import { ADD_TO_CART } from '../../graphql/Carts';


const ProductDetail = () => {

    const route = useRouter()
    const { data, loading, error } = useQuery(QUERY_PRODUCT, { variables: { id: route.query.productId } })
    //console.log('ProductID:', route.query.productId)
    const { user } = useContext(AuthContext)
    // console.log("produc Id", data)

    const [addToCart] = useMutation(ADD_TO_CART, {
        onCompleted: data => {
            console.log('data', data)
        },
        refetchQueries: [{ query: MY_PRODUCTS }]
    })

    const handleAddToCart = async (id) => {
        // console.log('product_id:',  id)

        if (!user) {
            return Router.push('/signin')
        }
        await addToCart({ variables: { id } })
    }

    //    console.log('result', data)
    if (error) return <p>Ooops....! Something went wrong, Plz try again later</p>
    if (loading) return <p>loading...</p>

    return (
        <div className="product-detail-card">
            <div className="product-detail-cover">
                <div className="product-image">
                    <img src={data.product.imageUrl} alt={data.product.description} />
                </div>

                <div className="product-info">
                    <h3 className="header-title">Product Detail</h3>
                    <div className="box-head">
                        <h2 className="product-name">{data.product.name}</h2>
                    </div>
                    <div className="box-content">
                        <p className="product-desc">{data.product.description}</p>
                    </div>
                    <div className="product-size">
                        <h3>{data.product.name}</h3>
                    </div>
                    <div className="product-color">
                        <h3>{data.product.name}</h3>
                    </div>
                    <div className="product-rating">
                        <h3>{data.product.name}</h3>
                    </div>

                    <div className="transport-service">
                        <h5>{data.product.name}</h5>
                    </div>
                    <div className="product-price">
                        <h1> ${data.product.price}</h1>
                    </div>
                </div>
            </div>
            <div className="product-detail-action">
                <hr />
                <div className="box-footer">
                    <button className="btn-back" onClick={() => Router.push('/products')}>Back</button>
                    <button className="btn-submit" onClick={() => handleAddToCart(data.product.id)}>ADD CART</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
