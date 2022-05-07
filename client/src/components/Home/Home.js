import React from 'react';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Toys from '../Toys/Toys';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Toys></Toys>
            <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;