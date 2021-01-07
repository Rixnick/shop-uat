import React from 'react';
import Router from 'next/router';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MY_CONTACT } from '../../graphql/Profile';


const ProfileContact = () => {
    const { data, loading, error } = useQuery(MY_CONTACT);


    if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>
    return (
        <>
            {
                data.user.contact === null ||
                    data.user.contact === undefined ?
                    <div className="profile-card">
                        <div className="profile-single__head">
                            <h3>Contact information:</h3>
                            <span><a href="">Add</a></span>
                        </div>
                        <div className="profile-single">
                            <span className="ti-link"></span>
                            <h3>Contact Type:</h3>
                            <small></small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-mobile"></span>
                            <h3>Contact No.:</h3>
                            <small></small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-email"></span>
                            <h3>Main  Email:</h3>
                            <small></small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-user"></span>
                            <h3>Second Email:</h3>
                            <small></small>
                        </div>
                    </div>
                    :
                    <div className="profile-card">
                        <div className="profile-single__head">
                            <h3>Contact information:</h3>
                            <span><a href="">Edit</a></span>
                        </div>

                        <div className="profile-single">
                            <span className="ti-link"></span>
                            <h3>Contact Type:</h3>
                            <small>{data.user.contact.type}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-mobile"></span>
                            <h3>Contact No.:</h3>
                            <small>{data.user.contact.contactNo}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-email"></span>
                            <h3>Main  Email:</h3>
                            <small>{data.user.contact.conditionEmail1}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-user"></span>
                            <h3>Second Email:</h3>
                            <small>{data.user.contact.conditionEmail2}</small>
                        </div>
                    </div>
            }
        </>
    )
}

export default ProfileContact;
