import React from 'react';
import Banner from '../components/Banner';
import AboutExpress from './AboutExpress';
import BrandCategory from './BrandCategory';
import TreeProduct from './TreeProduct';
import Count from '../components/Count';



const Home = () => {
    return (
        <div>
            <Banner/>
            <Count/>
            <AboutExpress/>
            <BrandCategory/>
            <TreeProduct/>
         
        </div>
    );
};

export default Home;