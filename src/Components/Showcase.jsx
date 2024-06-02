import React from 'react'
import ImagePersonal2 from '../assets/yo2.png'
import ImagePersonal from '../assets/yo.png'



const Showcase = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 ">

        <div className='flex flex-col justify-center items-center'>
        <img src={ImagePersonal} className='w-4/5 items-stretch rounded-sm' alt="/" />
        <p className='text-xs'>Kiyomizudera Walk</p>
        </div>
        
        <div className='flex flex-col justify-center items-center'>
          <p className='text-[#00df9a] uppercase font-bold'>Why book with me?</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 uppercase'>Because I live, eat, work and sleep here</h1>
          <p className='text-justify'>Living as a resident in Japan with a local family has allowed me to understand the culture and the local community in a deeper way. As an enthusiastic traveler since 2018, when I first moved to Australia, I realized how exciting and sometimes difficult it can be to explore the unknown.<br/><br/> Later, when I first came to Japan, I wouldn't have been able to explore anything if it weren't for the help of my wife, a Japanese national.<br/><br/> After some time of exploring back and forth I acquired the confidence to move around cities without even understanding the local language. Now, with a solid foundation in the Japanese language and with several gems and hidden spots ready to bring to the table for you, I would happily show you everything I was shown once and more. You will not be a tourist with me but a traveler.</p>
        </div>

        <div className='flex flex-col justify-center items-center md:m'>
        <img src={ImagePersonal2} className='w-4/5 items-stretch rounded-sm' alt="/" />
        <p className='text-xs'>East Kyoto Alleys</p>
        </div>
        
        {/* <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] md:mx-0'>Get Started</button> */}
      </div>
    </div>
  )
}

export default Showcase