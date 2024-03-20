import React from 'react';


const RightCard = ({iconImg}) => {
  
    return (
        
        
        <div class="h-48 w-48 relative cursor-pointer mb-10  hidden md:block">
      <div class="absolute inset-0 bg-[#65B741] opacity-25 rounded-lg shadow-sm"></div>
      <div class="absolute inset-0 transition-transform duration-300 transform hover:translate-x-10">
        <div class="h-full w-full p-3 bg-white rounded-lg shadow-sm">
          <img  src={iconImg} alt="" />
        </div>
      </div>
            </div>
           
       
    );
};

export default RightCard;