import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import UserProfile from '../../components/UserProfile';

const UserProfilePage = () => {
    return (
        <>
            <Sidebar />
            <div className="main-profile-content">
                <Header />
                <UserProfile />
            </div>
            </>
    )
}

export default UserProfilePage;