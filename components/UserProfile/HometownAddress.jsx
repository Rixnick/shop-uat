import React from 'react';
import Router from 'next/router';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MY_HOMETOWNADDRESS } from '../../graphql/Profile';



const HometownAddress = () => {
    const { data, loading, error } = useQuery(MY_HOMETOWNADDRESS);
    if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>

    return (
        <>
            {
                data.user.hometownAddress === null ||
                    data.user.hometownAddress === undefined ?
                    <div className="profile-card">
                        <div className="profile-single__head">
                            <h3>Hometown:</h3>
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
                    </div>
                    :
                    <div className="profile-card">
                        <div className="profile-single__head">
                            <h3>Hometown:</h3>
                            <span><a href="" onClick={() => Router.push('/profile/create')}>Edit</a></span>
                        </div>

                        <div className="profile-single">
                            <span className="ti-location-arrow"></span>
                            <h3>Address 1:</h3>
                            <small>{data.user.hometownAddress.address1}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-support"></span>
                            <h3>Address 2:</h3>
                            <small>{data.user.hometownAddress.address2}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-home"></span>
                            <h3>Village:</h3>
                            <small>{data.user.hometownAddress.village}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-location-arrow"></span>
                            <h3>City:</h3>
                            <small>{data.user.hometownAddress.city}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-server"></span>
                            <h3>Province/State:</h3>
                            <small>{data.user.hometownAddress.province}</small>
                        </div>

                        <div className="profile-single">
                            <span className="ti-world"></span>
                            <h3>Country:</h3>
                            <small>Laos</small>
                        </div>
                    </div>
            }
        </>
    )
}

export default HometownAddress;
