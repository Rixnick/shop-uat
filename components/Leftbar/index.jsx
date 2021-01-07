import React from 'react';
import Brands from './Brands';
import Categories from './Categories';

const LeftbarPage = () => {
    return (
        <div className="leftbar_page">
            <div>
                <Categories />
            </div>
            <div>
                <Brands />
            </div>
        </div>
    )
}

export default LeftbarPage;