import React from 'react'
import { Typography } from '@mui/material'
import menslide1 from '../../../assets/menpg/menslide1.png'
import menslide2 from '../../../assets/menpg/menslide2.png'
import menslide3 from '../../../assets/menpg/menslide3.png'
import { Link } from 'react-router-dom'
import dressimg from '../../../assets/dress.jpeg'
import { useEffect } from "react";
import { initCarousels } from "flowbite";
const Women = () => {
    useEffect(() => {
      initCarousels();
    }, []);
 
 return (
   <>
    <div id="default-carousel" className="relative w-full " data-carousel="slide">
    
      <div className="relative h-56 overflow-hidden rounded-base md:h-96">
        
        
       
        <div className="duration-700 ease-in-out absolute" data-carousel-item>
          <img 
            src="https://tse1.mm.bing.net/th/id/OIP.pFwV17bGfCsPamIdHT6BzQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
            className="absolute z-0 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
            alt="..."
          />
           <div className='absolute bottom-30 inset-x-0 z-10 flex flex-col items-center justify-center text-center text-white'>
      <Typography variant="p" >Elan Couture</Typography>
      <Typography variant="h1"  sx={{ fontSize: { xs: '2rem', md: '3.25rem' } }}>New Arrivals</Typography>
    <Link to="/menproducts"> <Typography variant="body1" className="relative cursor-pointer inline-block underline underline-offset-10 hover:underline-offset-4 transition-all duration-500">
                 Shop now
  {/* <span className="absolute left-0 top-7 w-full h-[2px] bg-white transition-all duration-200 hover:top-5"></span> */}
</Typography></Link>

    </div> 
          
        </div>
        {/* slide 1         */}
        <div className="hidden duration-700 ease-in-out absolute " data-carousel-item>
          <img 
            src="https://tse1.mm.bing.net/th/id/OIP.1SDJhZrPqt2a5p_Ul5SWagHaEP?rs=1&pid=ImgDetMain&o=7&rm=3"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
            alt="..."
          />
         <div className='absolute bottom-30 inset-x-0 z-10 flex flex-col items-center justify-center text-center text-white'>
      <Typography variant="p" >Elan Couture</Typography>
      <Typography variant="h1"  sx={{ fontSize: { xs: '2rem', md: '3.25rem' } }}>New Arrivals</Typography>
    <Link to="/menproducts"> <Typography variant="body1" className="relative cursor-pointer inline-block underline underline-offset-10 hover:underline-offset-4 transition-all duration-500">
                 Shop now
  {/* <span className="absolute left-0 top-7 w-full h-[2px] bg-white transition-all duration-200 hover:top-5"></span> */}
</Typography></Link>

    </div> 
        </div>
       
       <div className="hidden duration-700 ease-in-out "  data-carousel-item>
          <img 
            src="https://th.bing.com/th/id/OIP.V0mIXUFCUMzAOtmwGHHT6AAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" 
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
            alt="..."
          />
                
           <div className='absolute bottom-20 md:bottom-30 inset-x-0 ml-50 z-10 flex flex-col items-center justify-center text-center text-white'>
      <Typography variant="p" >Elan Couture</Typography>
      <Typography variant="h1"  sx={{ fontSize: { xs: '2rem', md: '3.25rem' } }}>New Arrivals</Typography>
    <Link to="/menproducts"> <Typography variant="body1" className="relative cursor-pointer inline-block underline underline-offset-10 hover:underline-offset-4 transition-all duration-500">
                 Shop now
  {/* <span className="absolute left-0 top-7 w-full h-[2px] bg-white transition-all duration-200 hover:top-5"></span> */}
</Typography></Link>


    </div> 
        </div>
       
        <div className="hidden duration-700 ease-in-out absolute "  data-carousel-item>
          <img 
            src="https://tse2.mm.bing.net/th/id/OIP._3joFUB3ySescES6_p8UbAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" 
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
            alt="..."
          />
           <div className='absolute bottom-20 md:bottom-30 inset-x-0 ml-50 z-10 flex flex-col items-center justify-center text-center text-white'>
      <Typography variant="p" >Elan Couture</Typography>
      <Typography variant="h1"  sx={{ fontSize: { xs: '2rem', md: '3.25rem' } }}>New Arrivals</Typography>
    <Link to="/menproducts"> <Typography variant="body1" className="relative cursor-pointer inline-block underline underline-offset-10 hover:underline-offset-4 transition-all duration-500">
                 Shop now
  {/* <span className="absolute left-0 top-7 w-full h-[2px] bg-white transition-all duration-200 hover:top-5"></span> */}
</Typography></Link>

    </div> 
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-base" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>

      </div>
 
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-5 h-5 text-white rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-5 h-5 text-white rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

    </div>
    {/* //section2  */}
   <div className="w-full p-5 mt-10">
  <div className="flex flex-col md:flex-row w-full min-h-[400px] ">
    
    {/* LEFT SIDE - IMAGE */}
    <div className="w-full md:w-1/2 relative">
      <img
        src={dressimg}
        alt="men"
        className="w-full h-full object-fit"
      /> 

    </div>

    {/* RIGHT SIDE - CONTENT */}
    <div className="w-full md:w-1/2 flex items-center justify-center p-8">
      <div className="max-w-md text-center md:text-left">
        
        <h2 className="text-3xl font-bold mb-4">
          Elevate Your Style. Define Your Confidence.
        </h2>

        <p className="mb-6 text-gray-600">
          Discover premium menswear designed for the modern man. From timeless essentials to bold statement pieces — upgrade your wardrobe with unmatched quality and comfort
        </p>

        <Link to="/womenproducts"><button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
          shop now
        </button></Link>

      </div>
    </div>

  </div>
</div>


   </>
  )
}

export default Women
