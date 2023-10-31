import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenue from '../PopulatMenue/PopularMenue';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenue></PopularMenue>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;