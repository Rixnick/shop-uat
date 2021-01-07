import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { MY_BRANDS } from '../../graphql/Brands';
import UserBrandItems from './UserBrandItems';



const BrandList = () => {


    const { data, loading, error } = useQuery(MY_BRANDS);
    //  console.log("Brand: ", data)

    if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>
    return (
        <>
            <div className="brands-card">
                <h3>Recently Brands List</h3>

                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Brand Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.user.brands.length > 0 &&
                                data.user.brands.map(brand => (
                                    <UserBrandItems key={brand.id} brand={brand} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BrandList;
