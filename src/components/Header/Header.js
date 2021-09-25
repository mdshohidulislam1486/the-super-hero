import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <div className='header-container'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className='nav-menu'>
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact Us</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;