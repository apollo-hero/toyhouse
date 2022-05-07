import React from 'react';
import './Banner.css';
import banner1 from './images/bnr1.jpg';
import banner2 from './images/bnr2.jpg';

const Banner = () => {
    return (
        <div>
            <h1 className='container banner-title'>Largest Toy <span>Warehouse</span> in the World</h1>
            <div className='container d-flex banner-images'>
                <div className='banner-img-1'><img src={banner1} alt="" /></div>
                <div className='banner-img-2'><img src={banner2} alt="" /></div>
            </div>
        </div>
    );
};

export default Banner;