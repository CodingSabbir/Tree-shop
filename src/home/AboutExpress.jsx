import React from 'react';
import aboutExpress from '../assets/img/plant.png'

const AboutExpress = () => {
    return (
        <section className="py-10">
        
        <div class="flex items-center text-body-4 text-metal-500 before:me-6 before:flex-[1_1_0%] after:ms-6 after:flex-[1_1_0%] before:border-metal-500 after:border-metal-500 before:border-t after:border-t px-3 sm:px-24 md:px-32 lg:px-48" >
            <img className='h-[50px] md:h-[80px] w-[50px] md:w-[80px]' src={aboutExpress} alt="" />
        </div>
        <h2 className=' uppercase text-[32px] md:text-[55px] font-semibold text-center text-[#65B741]'><span className='text-black'>About</span> Express</h2>
        <p className='text-center italic text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus eaque tempore. Omnis quisquam <br /> reiciendis, dolores ipsum corporis nisi nihil?</p>
      </section>
    );
};

export default AboutExpress;