import React from 'react';
import './PhotoGallery.css';
import img1 from './images/toy-1.jpg';
import img2 from './images/toy-2.jpg';
import img3 from './images/toy-3.jpg';
import img4 from './images/toy-4.jpg';
import img5 from './images/toy-5.jpg';
import img6 from './images/toy-6.jpg';
import img7 from './images/toy-7.jpg';
import img8 from './images/toy-8.jpg';

const PhotoGallery = () => {
    return (
        <div>
            <h2 className='container mx-auto text-center'>Upcoming Items</h2>

            <div className='photogallery container'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />


            </div>
        </div>
    );
};

export default PhotoGallery;