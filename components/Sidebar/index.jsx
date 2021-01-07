import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { MY_PROFILE } from '../../graphql/Profile';
import { AuthContext } from '../../contexts/AuthProvider';
import Link from 'next/link';

import { Avatar } from 'antd';

const Sidebar = () => {
    const { user, signout, setAuthUser } = useContext(AuthContext)
    const { data, loading, error } = useQuery(MY_PROFILE)

    // console.log('User Data:', data)

    if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>

    // useEffect(() => {
    //     if (data) {
    //         setAuthUser(data.user)
    //     }
    // }, [data])
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3 className="brand">
                        <span className="ti-unlink"></span>
                        <span>User Admin</span>
                    </h3>
                    <label htmlFor="" className="ti-menu-alt"></label>
                </div><hr />
                <div className="profile_image">
                    {
                        data.user &&
                        <>
                            <Avatar src="" size={60} />
                            <small>@{data.user.username}</small>
                        </>
                    }
                </div><hr />
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link href="/dashboard">
                                <a >
                                    <span className="ti-home"></span>
                                    <span>ຫນ້າຫລັກ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/userCustOrder">
                                <a >
                                    <span className="ti-view-list"></span>
                                    <span>ລາຍການສັ່ງຊື້ລູກຄ້າ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/userProducts">
                                <a >
                                    <span className="ti-server"></span>
                                    <span>ສິນຄ້າໃນສ່າງ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories">
                                <a >
                                    <span className="ti-clipboard"></span>
                                    <span>ປະເພດສິນຄ້າ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/brands">
                                <a>
                                    <span className="ti-folder"></span>
                                    <span>ແບຣນສິນຄ້າ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a href="">
                                    <span className="ti-layout-grid2"></span>
                                    <span>ລາຍການຫມວດສິນຄ້າ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/userBank">
                                <a >
                                    <span className="ti-wallet"></span>
                                    <span>ຂໍ້ມູນການຊຳລະ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/userSaleOut">
                                <a >
                                    <span className="ti-stats-up"></span>
                                    <span>ຂໍ້ມູນການຂ່າຍອອກສິນຄ້າ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/userProfile">
                                <a >
                                    <span className="ti-settings"></span>
                                    <span>ຂໍ້ມູນຜູ້ໃຊ້</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-footer">
                    <ul>
                        <li onClick={signout}>
                            <a href="">
                                <span className="ti-arrow-circle-left"></span>
                                <span >ອອກຈາກລະບົບ</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Sidebar;