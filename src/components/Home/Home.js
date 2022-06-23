import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import ReviewContain from './ReviewContain';
import Services from './Services';
import Works from './Works';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Brands></Brands>
            <Services></Services>
            <ReviewContain></ReviewContain>
            <Works></Works>
            
        </div>
    );
};

export default Home;