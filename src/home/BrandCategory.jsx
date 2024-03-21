import React from 'react';
import { Link } from 'react-router-dom';
import BrandMovingCards from '../components/BrandMovingCards';
import Section from '../components/Section';
import aboutExpress from '../assets/img/plant.png'
const BrandCategory = () => {
    const companyLogo=[
        {id:1,img:'/src/assets/img/brand1.png'},
        {id:2,img:'/src/assets/img/brand2.png'},
        {id:3,img:'/src/assets/img/brand3.png'},
        {id:4,img:'/src/assets/img/brand4.png'},
        {id:5,img:'/src/assets/img/brand5.png'},
    ]
    return (
        <div>
            <div className='max-w-screen-2xl mx-auto px-5  '>
                <Section sectionImg={aboutExpress} text1='our' text2='tree' />
                <BrandMovingCards  items={companyLogo}  />
                
                {/* cetegory image */}
                <div className='my-8 flex flex-col md:flex-row justify-center items-center gap-4'>
                
                <div>
                    <Link to={'/'}><img className='w-full md:h-[300px] lg:h-[400px] xl:h-[490px] hover:scale-105 transition-all duration-200' src="/src/assets/img/tree1.jpg" alt="" /></Link>   
                </div>
                <div className='md:w-1/2'> 
                    <div className='grid grid-cols-2 gap-2'>
                    <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/src/assets/img/tree2.jpg" alt="" /></Link> 
                    <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/src/assets/img/tree3.jpg" alt="" /></Link> 
                    <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/src/assets/img/tree6.jpg" alt="" /></Link> 
                    <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/src/assets/img/tree5.jpg" alt="" /></Link> 
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCategory;