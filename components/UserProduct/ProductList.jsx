import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import UserProductItems from './UserProductItems';

const ProductList = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
          <section className="recent-products">
                <div className="products-grid">
                    <div className="products-card">
                        <div className="product-card-header">
                            <h3>Recently products List</h3>
                        </div>
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Products Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Stock Qty</th>
                                        <th>Unit</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user &&
                                        user.products.length > 0 &&
                                        user.products.map(product => (
                                            <UserProductItems key={product.id} product={product} />
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}

export default ProductList;
