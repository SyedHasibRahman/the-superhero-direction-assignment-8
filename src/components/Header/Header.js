import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
// show header in UI 
const Header = () => {
    return (
        <div>
            <div>
                <div className="header">
                    <img className="logo" src={logo} alt="" />
                    <div className="header-menu">
                        <nav>
                            <a href="home">Home</a>
                            <a href="about-us">About Us</a>
                            <a href="contact-us">Contact US</a>
                            <a href="blog">Blog</a>
                        </nav>
                    </div>
                </div>
                <div className="header-text">
                    <h2>The Best Doctors Team  of Bangladesh</h2>
                    <h3>$250 MILLION OVER BUDGET ON HEALTH  PROJECT</h3>
                    <h4>The first thing that comes into our minds when looking for a doctor is whether they will be able to help you recover soon.</h4>
                </div>
            </div>
        </div>
    );
};

export default Header;