import React from 'react';
import treeIcon1 from "../assets/img/animation-icon1.png"
import treeIcon2 from "../assets/img/animation-icon2.png"
import treeIcon3 from "../assets/img/animation-icon3.png"
import treeIcon4 from "../assets/img/animation-icon4.png"
import RightCard from './RightCard';
import LeftCard from './LeftCard';
const AboutTreeCard = () => {
    return (
      
    
    <div className='grid md:grid-cols-4 px-5 lg:px-10 py-10 flex items-center '>
       <div className=' col-span-1'>
      <RightCard iconImg={treeIcon1}/>
      <RightCard iconImg={treeIcon2}/>
     </div>
     <div className=' col-span-2 sm:px-2'>
      <p className='text-[14px] lg:text-[16px] xl:text-[18px] px-2 text-center mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nisi reiciendis possimus iusto rem quos mollitia, ea laborum facilis adipisci, quod alias laboriosam. Quod ipsam labore fugiat, laborum officia repellat.</p>
      <p className='text-[14px] lg:text-[16px] xl:text-[18px] px-2  text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet reiciendis natus impedit ipsam ducimus accusamus cupiditate maxime esse officiis similique in accusantium iste ab, suscipit incidunt iusto dolorem, quos maiores dignissimos, facere deserunt. Cupiditate ipsa exercitationem aliquid officiis quos pariatur distinctio earum fugit nam aut porro autem nostrum esse excepturi id, quod sunt illo vel doloremque. Corrupti, cum. Rem?</p>
     <div className='flex justify-center items-center py-10'>
     <button class="  hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-[#65B741] bg-white px-3 text-black  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#65B741] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"><span class="relative z-10 uppercase font-semibold">we offers</span></button>
     </div>

     </div>

     <div>
      <div className='flex justify-end'>
      <LeftCard iconImg={treeIcon3}/>
      </div>
      <div className='flex justify-end'>
      <LeftCard iconImg={treeIcon4}/>
      </div>
     </div>

    </div>
      
       
    );
};

export default AboutTreeCard;