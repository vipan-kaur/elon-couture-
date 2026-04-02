import React from 'react'
import { Typography } from '@mui/material'
const Homesec1 = ({img1,img2}) => {
  return (
  <>
     <div className='min-h-screen mt-0 flex flex-col gap-3 p-3 md:flex-row  w-full '>
      <div className='relative w-full md:w-1/2 flex flex-col h-screen '>
        <img src={img1}  className='object-cover h-full -w-full'></img>   
         <div className='absolute bottom-30 inset-x-0 z-40 flex flex-col items-center justify-center text-center text-white'>
      <Typography variant="body1">Elan Couture</Typography>
      <Typography variant="h1"  sx={{ fontSize: { xs: '2rem', md: '3.25rem' } }}>New Arrivals</Typography>
       <Typography variant="body1">Laid-back layers that breeze into spring,
      from tailored linen to delicate knits</Typography>
     <Typography variant="body1" className="relative cursor-pointer inline-block underline underline-offset-10 hover:underline-offset-4 transition-all duration-500">
                 Shop now
  {/* <span className="absolute left-0 top-7 w-full h-[2px] bg-white transition-all duration-200 hover:top-5"></span> */}
</Typography>

    </div>           
        </div>


        <div className="w-full relative  md:w-1/2 h-screen ">
            <img className=' w-full  h-full object-cover' src={img2}></img>
             <div className='absolute bottom-30 inset-x-0 z-40 flex flex-col items-center justify-center text-center text-white'>
      <Typography variant="p" >Elan Couture</Typography>
      <Typography variant="h1"  sx={{ fontSize: { xs: '2rem', md: '3.25rem' } }}>New Arrivals</Typography>
     <Typography variant="body1" className="relative cursor-pointer inline-block underline underline-offset-10 hover:underline-offset-4 transition-all duration-500">
                 Shop now
  {/* <span className="absolute left-0 top-7 w-full h-[2px] bg-white transition-all duration-200 hover:top-5"></span> */}
</Typography>

    </div>
        </div>
    </div>
  </>
  )
}

export default Homesec1