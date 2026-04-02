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
import Dropdown from '../ui/dropdown';
import Topbar from './topbar';
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
    <>
    <div className='flex relative sticky top-8 z-50 bg-white justify-between items-center font-serif  px-3 py-3 lg:px-[56px]'>
      {/* Logo */}
      <Link to="/">
        <h1 className='text-4xl text-gray-800 md:text-2xl whitespace-nowrap'>Elon Couture</h1>
      </Link>

      {/* Desktop Menu */}
      <ul className=' hidden md:flex px-[33px] items-center text-xs gap-6 text-gray-700 mr-auto'>
        <Link to="/men"><li  className='block group hover:underline underline-offset-1 cursor-pointer hover:text-black'>
          MEN
          <div className=' fixed left-0 top-[96px] w-screen z-50
      opacity-0 invisible -translate-y-5
      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
      transition-all duration-700 ease-out'><Dropdown/></div>
          </li></Link>
       <Link to="/women"> <li className='block hover:underline underline-offset-1 cursor-pointer hover:text-black'>WOMEN</li></Link>
       <Link to="/Kids"> <li className='hover:underline underline-offset-1 cursor-pointer hover:text-black'>KIDS & BABY</li></Link>
        <li className='hover:underline underline-offset-1 cursor-pointer hover:text-black'>EXPLORE</li>
      </ul>

      {/* Icons */}
      <div className='flex gap-4 items-center md:gap-8 ' >
      
        <Link to="/login">
          <span className='hidden md:block'>
            <PermIdentityIcon />
          </span>
        </Link>
      <Link to='/wishlist'>  <span className='hidden md:block'>
          <FavoriteBorderIcon />
        </span></Link>
       <Link to="/cart"> <span>
         <Badge  badgeContent={totalQuantity}> <ShoppingCartIcon /></Badge>
         
        </span></Link>

        {/* Mobile Menu Button */}
        <div className='relative md:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuOpenIcon />}
          </button>

          {/* Overlay */}
          {menuOpen && (
            <div
              className='absolute right-3 top-3 z-30 '
              onClick={toggleMenu}
            > </div>
          )}

          {/* Sliding Mobile Menu */}
          <div
            className={`fixed top-[94px] right-0 w-full  h-screen bg-white z-40 transform transition-transform duration-500 ease-in-out ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <Navmenu toggleMenu={toggleMenu}/>
          </div>
        </div>
      </div>
    </div>
 </> );
};

export default Navbar;
