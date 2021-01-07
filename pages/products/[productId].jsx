import React from 'react'
import ProductDetail from '../../components/ProductDetail';

const ProductPage = () => {
    return (
        <div className="product-detail-page">
            <div className="product-detail-content">
                <main>
                    <ProductDetail />

                    <div className="product-release">
                        <h4>product you like</h4>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ProductPage;