// import React from 'react'
// import { useState } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import CloseIcon from '@mui/icons-material/Close';
// import Navmenu from './navmenu';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const[menuopen,setmenuopen]=useState(false);
//   // const[mouseenter,setmouseenter]=useState(false)
//     const toggleMenu=()=>{
//       setmenuopen(!menuopen)
//     }

//   return (
//     <>
//    <>
//         <div className='flex  relative sticky top-0 z-50 bg-white justify-between items-center font-serif py-3 lg:px-[56px] ' >

//                 <Link to="/"> <h1 className='text-4xl text-gray-800 md:text-2xl '>Elon Couture</h1></Link>
           
//                  <ul className='hidden  md:flex px-[33px] items-center  text-xs gap-6 text-gray-700 mr-auto'>

//                     <li  className='block hover:underline underline-offset-1  cursor-pointer hover:text-black' >MEN
                     
//                     </li>

//                     <li className='block hover:underline underline-offset-1  cursor-pointer hover:text-black'>WOMEN</li>
//                     <li className='hover:underline underline-offset-1 cursor-pointer hover:text-black'>KIDS & BABY</li>
//                     <li className='hover:underline underline-offset-1 cursor-pointer hover:text-black'>HOME</li>
//                     <li className='hover:underline  underline-offset-1 cursor-pointer hover:text-black'>DISCOVER</li>
//                  </ul>


//             <div className={`flex gap-3 items-center md:gap-8 `}>
//                    <button> <SearchIcon/></button>
//                   <Link to="/login"> <span className='hidden md:block'> <PermIdentityIcon/></span></Link>
//                    <span className='hidden md:block'> <FavoriteBorderIcon/></span>
//                    <span > <ShoppingCartIcon/></span>
//                    <div className={`md:hidden  `} onClick={toggleMenu}>{menuopen?<CloseIcon/>:<MenuOpenIcon/>}
                  
//                     <div className={`absolute top-full  right-0 h-screen w-full bg-white z-40 transform transition-transform duration-600 ease-in-out${!menuopen&& 'hidden'}  ${menuopen? 'translate-x-0' : 'translate-x-full '}`}><Navmenu/></div>
                   
                    
      
//                    </div>

//             </div>
//         </div>
//    </>
//     </>
//   )
// }

// export default Navbar



import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import Navmenu from './navmenu';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

import { searchcontext } from '../../searchprovider';
const Navbar = () => {
  const [ menuOpen, setMenuOpen] = useState(false);
  const[showsearchbar,setshowsearchbar]= useState(false);
 const{search,setsearch}=useContext(searchcontext)
   const cartItems = useSelector((state) => state.cart.cartitem || []);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex relative sticky top-0 z-50 bg-white justify-between items-center font-serif py-3 lg:px-[56px]'>
      {/* Logo */}
      <Link to="/">
        <h1 className='text-4xl text-gray-800 md:text-2xl'>Elon Couture</h1>
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden md:flex px-[33px] items-center text-xs gap-6 text-gray-700 mr-auto'>
        <Link to="/men"><li  className='block hover:underline underline-offset-1 cursor-pointer hover:text-black'>MEN</li></Link>
       <Link to="/women"> <li className='block hover:underline underline-offset-1 cursor-pointer hover:text-black'>WOMEN</li></Link>
        <li className='hover:underline underline-offset-1 cursor-pointer hover:text-black'>KIDS & BABY</li>
        <li className='hover:underline underline-offset-1 cursor-pointer hover:text-black'>HOME</li>
        <li className='hover:underline underline-offset-1 cursor-pointer hover:text-black'>DISCOVER</li>
      </ul>

      {/* Icons */}
      <div className='flex gap-3 items-center md:gap-8'>
        {showsearchbar &&( 
    <input placeholder='search here' value={search} onChange={(e)=>setsearch(e.target.value)} className=' border border-gray-400
    text-black
    placeholder-gray-400
    text-center
    px-4
    rounded
    focus:outline-none
    focus:ring-1
    focus:ring-gray-500'></input> ) }
   
    <button onClick={()=>{setshowsearchbar(prev => !prev)}}><SearchIcon/> </button>
          
           
       
        <Link to="/login">
          <span className='hidden md:block'>
            <PermIdentityIcon />
          </span>
        </Link>
        <span className='hidden md:block'>
          <FavoriteBorderIcon />
        </span>
       <Link to="/cart"> <span>
         <Badge  badgeContent={totalQuantity}> <ShoppingCartIcon /></Badge>
         
        </span></Link>

        {/* Mobile Menu Button */}
        <div className='md:hidden relative'>
          <button onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuOpenIcon />}
          </button>

          {/* Overlay */}
          {menuOpen && (
            <div
              className='fixed inset-0 bg-black bg-opacity-40 z-30'
              onClick={toggleMenu}
            ></div>
          )}

          {/* Sliding Mobile Menu */}
          <div
            className={`fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <Navmenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
