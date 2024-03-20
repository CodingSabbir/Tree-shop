import React from 'react';

const Section = ({sectionImg,text1,text2,paragraph1,paragraph2}) => {
    return (
        
             <section>
        
        <div class="flex items-center text-body-4 text-metal-500 before:me-6 before:flex-[1_1_0%] after:ms-6 after:flex-[1_1_0%] before:border-metal-500 after:border-metal-500 before:border-t after:border-t px-3 sm:px-24 md:px-32 lg:px-48" >
            <img className='h-[50px] md:h-[80px] w-[50px] md:w-[80px]' src={sectionImg} alt="" />
        </div>
        <h2 className=' uppercase text-[32px] md:text-[55px] font-semibold text-center text-[#65B741]'><span className='text-black'>{text1}</span> {text2}</h2>
        <p className='text-center italic text-xl px-5 text-balance'>{paragraph1}<br /> {paragraph2}</p>

        
      </section>
       
    );
};

export default Section;