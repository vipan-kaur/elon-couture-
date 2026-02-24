import React from 'react'
import { Typography } from '@mui/material'
import homevideo from "../../assets/elan.mp4"
import womenhome from "../../assets/dress.jpeg"
import menhome from "../../assets/menhome.jpeg"
import Homesec1 from '../ui/homesec1'
const Home = () => {
  return (
   <>
   <div className='relative h-screen w-full'>
    <video src={homevideo} autoPlay loop muted className='h-full w-full object-cover '></video>
    <div className='absolute bottom-30 inset-x-0 z-40 flex flex-col items-center justify-center text-center text-white'>
      <Typography variant="p" >Elan Couture</Typography>
      <Typography variant="h1"  sx={{ fontSize: { xs: '2rem', md: '3.25rem' } }}>New Arrivals</Typography>
     <Typography variant="body1" className="relative cursor-pointer inline-block underline underline-offset-10 hover:underline-offset-4 transition-all duration-500">
                 Shop now
  {/* <span className="absolute left-0 top-7 w-full h-[2px] bg-white transition-all duration-200 hover:top-5"></span> */}
</Typography>

    </div>
   </div>
   
    <Homesec1 img1={womenhome} img2={menhome}/>
   </>
  )
}

export default Home