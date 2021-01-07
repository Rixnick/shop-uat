import React from 'react';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const CategoriesPgae = () => {
    return (
        <>
            <Sidebar />
            <div className="main-categories-content">
                <Header />

                <main>
                        <Categories />
                </main>
            </div>
        </>
    )
}

export default CategoriesPgae;
