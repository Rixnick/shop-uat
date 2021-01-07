import React,  { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import { AuthContext } from '../contexts/AuthProvider';
import Footer from './Footer';
import Sidebar from './Sidebar';


function Layouts({ children }) {
    const { user, setAuthUser } = useContext(AuthContext);

    return (
        <>
            <Head>
                <title>Ozone Shoppy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <Navigation />
                {children}

            {/* <div>
                <Footer />
            </div> */}
            </>
    )
}

export default Layouts;
