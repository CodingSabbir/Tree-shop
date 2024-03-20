import React from 'react';

const LeftCard = ({iconImg}) => {
    return (
        <div class="h-48 w-48 relative cursor-pointer mb-10 hidden md:block">
    <div class="absolute inset-0 bg-[#65B741] opacity-25 rounded-lg shadow-sm"></div>
    <div class="absolute inset-0 transform hover:-translate-x-10 transition duration-300">
      <div class="h-full w-full bg-white rounded-lg shadow-sm">
      <img src={iconImg} alt="" />
      </div>
    </div>
  </div>
    );
};

export default LeftCard;