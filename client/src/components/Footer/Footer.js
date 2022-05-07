import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer mx-auto'>
            <div className='footer-part container w-50 mx-auto'>
            <div>
            <h1>Toy<span className='footer-text'>House</span></h1>
            <h5>Largest Toy Warehouse in the World.</h5>
            </div>
            <div className='address'>
                <h3>Email: support@toyhouse.co</h3>
                <p>Address: House: 34, Road:38, Mirpur-12, Pollobi, Dhaka.</p>
            </div>
            <div className='menu'>
                <h4>Useful Link</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Manage Items</a></li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Footer;