import React from 'react';
import Brands from '../../components/Brands';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const UserBrandPage = () => {
    return (
        <>
            <Sidebar />
              <div className="main-brands-content">
                  <Header />
                <main>
                    <Brands />
                </main>
              </div>
        </>
    )
}

export default UserBrandPage;
