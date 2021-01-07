import React from 'react';
import Router  from 'next/router';

const Header = () => {
    return (
            <header>
                <div className="search-wrapper">
                    <input type="search" name="search" id="search" placeholder="Search..." />
                    <span className="ti-search"></span>
                </div>

                <div className="social-icons">
                    <span className="ti-home" onClick={() => Router.push('/')}></span>
                    <span className="ti-bell"></span>
                    <span className="ti-comment"></span>
                    <span className="ti-shopping-cart" onClick={() => Router.push('/userCart')}><span>3</span></span>
                    <div></div>
                </div>
            </header>
    )
}

export default Header;
