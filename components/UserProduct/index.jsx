import React, { Component, useState } from 'react'
import ProductList from './ProductList';
import Backdrop from '../Backdrop';
import Modal from '../Modal';
// import CreateProduct from './CreateProduct';


import { useMutation } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import { QUERY_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, MY_PRODUCTS } from '../../graphql/Products';


class UserProduct extends Component {
    state = {
        creating: false
    };

    CreateEventHandler = () => {
        this.setState({ creating: true });
    };

    modalConfirmHandler = () => {
        this.setState({ creating: false });
    };

    modalCancelHandler = () => {
        this.setState({ creating: false });
    };
    /**
     * Create Form Component with Function
     */
    _renderCreateProduct = () => () => {
        const [edit, setEdit] = useState(false)
        const [file, setFile] = useState(null)
        const [productData, setProductData] = useState({
            name: '',
            description: '',
            price: '',
            stockqty:'',
            imageUrl: ''
        })

        const [createProduct, { loading, error }] = useMutation(CREATE_PRODUCT, {
            refetchQueries: [{ query: QUERY_PRODUCTS }]
        })

        const handleChange = e => setProductData({
            ...productData,
            [e.target.name]: e.target.value
        })

        const selectFile = e => {
            const files = e.target.files
            setFile(files[0])
            //console.log(files)
        }

        //Upload File to Cloudinary
        const uploadFile = async () => {
            const data = new FormData()
            data.append('file', file)
            data.append('upload_preset', 'shoppin')
            const res = await fetch('https://api.cloudinary.com/v1_1/swizce/image/upload', {
                method: 'post',
                body: data
            })
            const result = await res.json()
            //console.log('image result',  result)
            return result.secure_url
        }

        const handleSubmit = async e => {
            try {
                e.preventDefault()
                const url = await uploadFile()
                // console.log('image Url:', url)
                if (url) {
                    const result = await createProduct({
                        variables: {
                            ...productData,
                            price: +productData.price,
                            imageUrl: url
                        },
                    })
                    //console.log('Product Data:', result)
                    return result;
                }
                Router.push('/userProducts')
            } catch (error) {
                console.log(error)
            }
        }
        return (
            <div className="create-product__Card">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="productname">Product Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Product Name"
                            value={productData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="address">Product Desc:</label>
                        <textarea
                            type="text"
                            name="description"
                            placeholder="Product Description"
                            value={productData.description}
                            onChange={handleChange}
                            rows="4"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="city">Price:</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={productData.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="stockqty">Stock Qty:</label>
                        <input
                            type="number"
                            name="stockqty"
                            placeholder="Stock Qualtity"
                            value={productData.stockqty}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="contact">--Select Categories--</label>
                        <input
                            type="text"
                            name="contact"
                            placeholder="Contact No."
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="contact">--Select Brands--</label>
                        <input
                            type="text"
                            name="contact"
                            placeholder="Contact No."
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="contact">Product Image</label>
                        <input
                            type="file"
                            name="file"
                            placeholder="file *.png, *.jpg..."
                            onChange={selectFile}
                        />
                    </div>
                    <div className="form-submit">
                        <button className="btn__cancel" onClick={() => Router.push('/userProducts')}>Back</button>
                        <button
                            className="btn__submit"
                            type="submit"
                            style={{ cursor: !productData.name || !productData.description || !productData.price || !file || loading ? 'not-allowed' : 'pointer' }}
                            disabled={!productData.name || !productData.description || !productData.price || !file || loading}
                        >Submit{loading ? 'Submiting...' : ''}</button>
                    </div>
                </form>

            </div>
        )
    }

    render() {
        const CreateForm = this._renderCreateProduct();
        return (
            <>
                <div className="product-content__header">
                    <h2 className="dash-title">All Products List</h2>

                    <a onClick={this.CreateEventHandler}>
                        <span className="ti-plus"></span>
                        <small>Add Product</small>
                    </a>
                </div>
                { this.state.creating && <Backdrop />}
                { this.state.creating && (
                    <Modal title="Create Product"
                        canCancel
                        canConfirm
                        onCancel={this.modalCancelHandler}
                        onConfirm={this.modalConfirmHandler}>
                        <CreateForm />
                    </Modal>)}
                <ProductList />
            </>
        )
    }
}

export default UserProduct;
