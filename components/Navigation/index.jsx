import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from '@apollo/react-hooks';
import { MY_PRODUCTS } from '../../graphql/Products';

import { Avatar } from 'antd';


const navLink = [
    {
        title: 'HOME',
        path:'/'
    },
    {
        title: 'PRODUCTS',
        path:'/products'
    },
    {
        title: 'CARTS',
        path:'/userCart'
    },
    {
        title: 'SIGNIN',
        path:'/signin'
    },
    {
        title: 'SIGNUP',
        path:'/signup'
    }
]

const UserAdmin =  [
    {
        title: 'HOME',
        path:'/'
    },
    {
        title: 'PRODUCTS',
        path:'/products'
    },
    {
        title: 'CARTS',
        path:'/userCart'
    },
    {
        title: 'DASHBOARD',
        path:'/dashboard'
    },
    {
        title: 'SIGNOUT',
        path:'/signout'
    }
]
function Navigation() {
    const [menuActive, setMenuActive] = useState(false);
    const { user, signout, setAuthUser } = useContext(AuthContext);
    const { data } = useQuery(MY_PRODUCTS);


    useEffect(() => {
        if(data){
            setAuthUser(data.user)
        }
    }, [data])
    return(
        <nav className="site-navigation">
            <span className="menu-title"> Ozone Shoppy</span>
           <div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                          {  
                          !user &&
                          navLink.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.path}>
                                        <a>{link.title}</a>
                                    </Link>
                                </li>
                            ))}
                        {
                            user &&
                            UserAdmin.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.path}>
                                        <a>{link.title}</a>
                                    </Link>
                                </li> ) )
                        }
                </ul>
           </div>
           <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
        </nav>
    )
}

export default Navigation;