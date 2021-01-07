import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MY_PROFILE } from '../../graphql/Profile';


const HeaderProfile = () => {
    const { data, loading, error } = useQuery(MY_PROFILE)
    // console.log("User:", data)

    if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>
    return (
        <>
            {
                 data.user.profile === null || 
                 data.user.profile === undefined ? 
                 <div className="profile-image-cards">
                    <div className="cover-image">
                            <div></div>
                    </div>
                    <div className="profile-image">
                            <div></div>
                    </div>
                </div>
                :
                <div className="profile-image-cards">
                    <div className="cover-image">
                            <img src={data.user.profile.coverImage} alt="cover-image"/>
                    </div>
                    <div className="profile-image">
                           <img src={data.user.profile.profileImage} alt="profile-image"/>
                    </div>
                </div>
            }
        </>
    )
}

export default HeaderProfile;
