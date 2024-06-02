import React from 'react'
import { FaPerson } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";



const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        
      <div className='w-full shadow-xl flex flex-col p-4  my-8 rounded-lg hover:scale-105 duration-300'>
         <MdGroups className='w-20 mx-auto mt-[-3rem] bg-transparent size-7' />
         <h2 className='text-2xl font-bold text-center py-8' >Standard Tour: Short</h2>
         <p className='text-center text-4xl font-bold '>4 hours</p>
         <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Feature 1</p>
            <p className='py-2 border-b mx-8'>Feature 2</p>
           <p className='py-2 border-b mx-8'>Feature 3</p>
         </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3' >Book</button>
        </div>
        
        
        <div className='w-full shadow-xl flex flex-col md:my-0 p-4 my-8 rounded-lg hover:scale-105 duration-300'>
         
         <FaRankingStar className='w-20 mx-auto mt-[-3rem] bg-transparent size-7 color-[#FFD700]'/>
         <h2 className='text-2xl font-bold text-center py-8' >Customised Tour</h2>
         <p className='text-center text-4xl font-bold '>6+ hours</p>
         <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Feature 1</p>
            <p className='py-2 border-b mx-8'>Feature 2</p>
           <p className='py-2 border-b mx-8'>Feature 3</p>
         </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3' >Book</button>
        </div>

 

        <div className='w-full shadow-xl flex flex-col p-4  my-8 rounded-lg hover:scale-105 duration-300'>
         <MdGroups className='w-20 mx-auto mt-[-3rem] bg-transparent size-7' />
         <h2 className='text-2xl font-bold text-center py-8' >Standard Tour: Long</h2>
         <p className='text-center text-4xl font-bold '>6 hours</p>
         <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Feature 1</p>
            <p className='py-2 border-b mx-8'>Feature 2</p>
           <p className='py-2 border-b mx-8'>Feature 3</p>
         </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3' >Book</button>
        </div>
      </div>
    </div>
  )
}

export default Cards