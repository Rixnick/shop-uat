import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import { QUERY_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, MY_PRODUCTS } from '../../graphql/Products';

const CreateProduct = () => {

    const [edit, setEdit] = useState(false)
    const [file, setFile] = useState(null)
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
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
        <div className="create-product-card">
            <div className="create-product_tabs">
                <h5>create More tabs here</h5>
                <ul>
                    <li><a href="">Product Basic Info</a></li>
                    <li><a href="">Product Image Gallary</a></li>
                    <li><a href="">Product Promotion</a></li>
                    <li><a href="">Product Slug detail</a></li>
                    <li><a href="">Product Release QR-Code</a></li>
                </ul>
            </div>
            <div className="create-product_form">
                <form onSubmit={handleSubmit} >
                    <div className="info-state">
                        {
                            !edit ? <>
                                <label htmlFor="productname">Product Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Product Name"
                                    value={productData.name}
                                    onChange={handleChange}
                                />
                                <label htmlFor="address">Product Desc:</label>
                                <textarea
                                    type="text"
                                    name="description"
                                    placeholder="Product Description"
                                    value={productData.description}
                                    onChange={handleChange}
                                />
                                <label htmlFor="city">Price:</label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    value={productData.price}
                                    onChange={handleChange}
                                />
                                <label htmlFor="contact">Stock Qty:</label>
                                <input
                                    type="text"
                                    name="contact"
                                    placeholder="Contact No."
                                />
                                <label htmlFor="contact">--Select Categories--</label>
                                <input
                                    type="text"
                                    name="contact"
                                    placeholder="Contact No."
                                />
                                <label htmlFor="contact">--Select Brands--</label>
                                <input
                                    type="text"
                                    name="contact"
                                    placeholder="Contact No."
                                />
                                <label htmlFor="contact">Product Image</label>
                                <input
                                    type="file"
                                    name="file"
                                    placeholder="file *.png, *.jpg..."
                                    onChange={selectFile}
                                />
                            </> : <>
                                    <label htmlFor="productname">Product Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Product Name"
                                        value={productData.name}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="address">Product Desc:</label>
                                    <textarea
                                        type="text"
                                        name="description"
                                        placeholder="Product Description"
                                        value={productData.description}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="city">Price:</label>
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="Price"
                                        value={productData.price}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="contact">Stock Qty:</label>
                                    <input
                                        type="text"
                                        name="contact"
                                        placeholder="Contact No."
                                    />
                                    <label htmlFor="contact">--Select Categories--</label>
                                    <input
                                        type="text"
                                        name="contact"
                                        placeholder="Contact No."
                                    />
                                    <label htmlFor="contact">--Select Brands--</label>
                                    <input
                                        type="text"
                                        name="contact"
                                        placeholder="Contact No."
                                    />
                                    <label htmlFor="contact">Product Image</label>
                                    <input
                                        type="file"
                                        name="file"
                                        placeholder="file *.png, *.jpg..."
                                        onChange={selectFile}
                                    />
                                </>
                        }

                    </div>
                    {/* <div className="create-product-footer">
                        {
                            !edit ?
                                <>
                                    <button className="btn-back-products" onClick={() => Router.push('/userProducts')}>Back</button>
                                    <button
                                        className="btn-submit"
                                        type="submit"
                                        style={{ cursor: !productData.name || !productData.description || !productData.price || !file || loading ? 'not-allowed' : 'pointer' }}
                                        disabled={!productData.name || !productData.description || !productData.price || !file || loading}
                                    >Submit{loading ? 'Submiting...' : ''}</button>
                                </>
                                :
                                <>
                                    <button className="btn-back-products" onClick={() => Router.push('/userProducts')}>Back</button>
                                    <button
                                        className="btn-submit"
                                        type="submit"
                                        style={{ cursor: !productData.name || !productData.description || !productData.price || !file || loading ? 'not-allowed' : 'pointer' }}
                                        disabled={!productData.name || !productData.description || !productData.price || !file || loading}
                                    >Update{loading ? 'Submiting...' : ''}</button>
                                </>
                        }
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default CreateProduct;
