import React, { useEffect, useState } from 'react';
import bannerImage1 from "../assets/img/banner-1.jpg"
import bannerImage2 from "../assets/img/banner-2.jpg"
import bannerImage3 from "../assets/img/banner-3.jpg"
const Banner = () => {
    const images = [
        bannerImage1,
        bannerImage2,
        bannerImage3
   
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div>
            <div
                className="elementor-background-slideshow__slide__image h-[400px] md:h-[450px] lg:h-[600px] w-full bg-cover bg-center  left-0 z-0 "
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            >
               
               <h1 className=' text-[42px] md:text-[70px] text-white font-semibold ml-5  md:ml-10 pt-36'>Welcome <br /> to Tree Shop</h1> 
              <div className='flex'>
              <button class="group relative min-h-[50px] ml-5 md:ml-10 w-40 overflow-hidden border border-[#65B741] bg-black text-[#fff] shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#65B741] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#65B741] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
      <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#65B741] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#65B741] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
      <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white uppercase">learnmore</span>
              </button>
              <button class="group relative min-h-[50px] ml-5 md:ml-10 w-40 overflow-hidden border border-[#65B741] bg-black text-[#fff] shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#65B741] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#65B741] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
      <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#65B741] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#65B741] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
      <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white uppercase">purchase teams</span>
        </button>
              </div>
            </div>
            
        </div>
        
    );
};

export default Banner;