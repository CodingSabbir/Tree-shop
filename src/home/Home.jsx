import React from 'react';
import Banner from '../components/Banner';
import AboutExpress from './AboutExpress';
import BrandCategory from './BrandCategory';
import TreeProduct from './TreeProduct';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutExpress/>
            <BrandCategory/>
            <TreeProduct/>
        </div>
    );
};

export default Home;