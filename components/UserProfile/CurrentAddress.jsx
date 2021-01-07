import React from 'react';
import Router from 'next/router';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MY_CURRENTADDRESS } from '../../graphql/Profile';




const CurrentAddress = () => {
    const { data, loading, error } = useQuery(MY_CURRENTADDRESS);

    if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>


    return (
        <>
            {
                data.user.currentAddress === null ||
                    data.user.currentAddress === undefined ?
                    <div className="profile-card">
                        <div className="profile-single__head">
                            <h3>Current Address:</h3>
                            <span><a href="" onClick={() => Router.push('/profile/create')}>Add</a></span>
                        </div>

                        <div className="profile-single">
                            <span className="ti-location-arrow"></span>
                            <h3>Address 1:</h3>
                            <small></small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-support"></span>
                            <h3>Address 2:</h3>
                            <small></small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-home"></span>
                            <h3>Village:</h3>
                            <small></small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-location-arrow"></span>
                            <h3>City:</h3>
                            <small></small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-server"></span>
                            <h3>Province/State:</h3>
                            <small></small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-world"></span>
                            <h3>Country:</h3>
                            <small></small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-layout-cta-left"></span>
                            <h3>Postal code:</h3>
                            <small></small>
                        </div>
                    </div>
                    :
                    <div className="profile-card">
                        <div className="profile-single__head">
                            <h3>Current Address:</h3>
                            <span><a href="" onClick={() => Router.push('/profile/create')}>Edit</a></span>
                        </div>

                        <div className="profile-single">
                            <span className="ti-location-arrow"></span>
                            <h3>Address 1:</h3>
                            <small>{data.user.currentAddress.address1}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-support"></span>
                            <h3>Address 2:</h3>
                            <small>{data.user.currentAddress.address2}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-home"></span>
                            <h3>Village:</h3>
                            <small>{data.user.currentAddress.village}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-location-arrow"></span>
                            <h3>City:</h3>
                            <small>{data.user.currentAddress.city}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-server"></span>
                            <h3>Province/State:</h3>
                            <small>{data.user.currentAddress.province}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-world"></span>
                            <h3>Country:</h3>
                            <small>Laos</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-layout-cta-left"></span>
                            <h3>Postal code:</h3>
                            <small>010110</small>
                        </div>
                    </div>
            }
        </>
    )
}

export default CurrentAddress;
