import React from 'react';
import { MY_CATEGORIES } from '../../graphql/Category';
import { useQuery, useMutation } from '@apollo/react-hooks';
import CategoryItems from './CategoryItems';

const CategoriesList = () => {
    const {data, loading, error} = useQuery(MY_CATEGORIES);
        // console.log("Categories:", data)
        if (error) return <p>Oooops...Something went wrong!</p>
        if (loading) return <p>Loading...!</p>  


    return (
        <>
            <div className="categories-card">
                <h3>Recently Categories List</h3>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Category Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                data.user.categories.length > 0 &&
                                data.user.categories.map(category => (
                                    <CategoryItems key={category.id} category={category} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CategoriesList;
