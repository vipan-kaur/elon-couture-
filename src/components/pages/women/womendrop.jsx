 import React from 'react'
import img1 from '../../../assets/dress.jpeg';
import img2 from '../../../assets/bag.jpeg'
import img3 from '../../../assets/dresshome.jpeg'
const Womendrop = () => {
  const h3="absolute bottom-15 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-lg"
  const p='absolute underline text-white cursor-pointer text-sm bottom-10  left-14'
  return (
    <>
  
    <div className="w-screen bg-white shadow-xl flex">

      {/* LEFT MENU */}
      <div className="w-1/4 bg-gray-100">
        <ul className="flex flex-col gap-5 p-[60px] text-sm">
          <li className="underline cursor-pointer">Explore</li>
          <li className="hover:underline cursor-pointer">Dress</li>
          <li className="hover:underline cursor-pointer">Accessories</li>
          <li className="hover:underline cursor-pointer">Bags</li>
          <li className="hover:underline cursor-pointer">Shoes</li>
          <li className="hover:underline cursor-pointer">Tops</li>
        </ul>
      </div>

    
      <div className="w-3/4 flex flex-col gap-6 p-10">

  
        <h1 className="text-lg border-b pb-2">Women's Section</h1>

 
        <div className="flex gap-6">
          <div className='relative'>
          <img src={img1} className="w-48 h-60 object-cover" />
          <h3 className={h3}> Summer Collection </h3>
    <p className={p}>Explore now</p>          </div>

      
          <div className='relative'>
          <img src={img2} className="w-48 h-60 object-cover" />
          <h3 className={h3}> Top Collection </h3>
    <p className={p}>Explore now</p>          </div>

     <div className='relative'>
          <img src={img3} className="w-48 h-60 object-cover" />
          <h3 className={h3}> Dress  </h3>
    <p className={p}>Explore now</p>          </div>

    
          <div className='relative'>
          <img src={img1} className="w-48 h-60 object-cover" />
          <h3 className={h3}> Accessories </h3>
           <p className={p}>Explore now</p>
          </div>  


        </div>

      </div>
    </div>
       </>
  ) 
}   

export default Womendrop;


