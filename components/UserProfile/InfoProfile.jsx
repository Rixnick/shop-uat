import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MY_PROFILE } from '../../graphql/Profile';
import Router  from 'next/router';
import dayjs from 'dayjs';




const InfoProfile = () => {
    const { data, loading, error } = useQuery(MY_PROFILE)
    // console.log("User:", data)

    if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>


    return (
        <>
        {
              data.user.profile === null || 
              data.user.profile === undefined ? 
              <div className="profile-card">
                    <div className="profile-single__head">
                        <h3>Personal Information:</h3>
                        <span><a href="">Add</a></span>
                    </div>
                    <div className="profile-single">
                        <span className="ti-id-badge"></span>
                        <h3>First Name:</h3>
                        <small></small>
                    </div>

                    <div className="profile-single">
                        <span className="ti-face-smile"></span>
                        <h3>Last Name:</h3>
                        <small></small>
                    </div>

                    <div className="profile-single">
                        <span className="ti-time"></span>
                        <h3>Birthday:</h3>
                        <small></small>
                    </div>

                    <div className="profile-single">
                        <span className="ti-comments-smiley"></span>
                        <h3>Age:</h3>
                        <small></small>
                    </div>

                    <div className="profile-single">
                        <span className="ti-user"></span>
                        <h3>Gender:</h3>
                        <small></small>
                    </div>

                    <div className="profile-single">
                        <span className="ti-heart"></span>
                        <h3>Status:</h3>
                        <small></small>
                    </div>
            </div>
            :
            <div className="profile-card">
                    <div className="profile-single__head">
                        <h3>Personal Information:</h3>
                        <span onClick={() => Router.push('/profile/create')}><a href="">Edit</a></span>
                    </div>
                    <div className="profile-single">
                        <span className="ti-id-badge"></span>
                        <h3>First Name:</h3>
                        <small>{data.user.profile.firstname}</small>
                    </div>

                    <div className="profile-single">
                        <span className="ti-face-smile"></span>
                        <h3>Last Name:</h3>
                        <small>{data.user.profile.lastname}</small>
                    </div>

                    <div className="profile-single">
                        <span className="ti-time"></span>
                        <h3>Birthday:</h3>
                        <small> {dayjs(data.user.profile.birthdate).format('YYYY-MMM-DD')}</small>
                    </div>

                    <div className="profile-single">
                        <span className="ti-comments-smiley"></span>
                        <h3>Age:</h3>
                        <small>{data.user.profile.age}</small>
                    </div>

                    <div className="profile-single">
                        <span className="ti-user"></span>
                        <h3>Gender:</h3>
                        <small>{data.user.profile.gender}</small>
                    </div>

                    <div className="profile-single">
                        <span className="ti-heart"></span>
                        <h3>Status:</h3>
                        <small>{data.user.profile.mentalStatus}</small>
                    </div>
            </div>
        }
        </>
    )
}

export default InfoProfile;
