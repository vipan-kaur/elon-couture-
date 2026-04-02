import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtowish, removeFromwish } from '../../../slice/cartslice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ProductCard from '../productCard';

const Womenproducts = () => {
  const [womenItems, setwomenItems] = useState([]); 
  const wishlist = useSelector((state) => state.cart.wishlistitem);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products/women");
        const data = await response.json();
        console.log("data",data)
        setwomenItems(data.AllProduct || data); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (

    <ProductCard category={womenItems}></ProductCard>
  )
}

export default Womenproducts;












// import React, { useContext } from 'react'
// import Button from '@mui/material/Button';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { Link } from 'react-router-dom';
// import { searchcontext } from '../../../searchprovider';
// import { addtowish ,removeFromwish} from '../../../slice/cartslice';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useDispatch, useSelector } from 'react-redux';
// const Womenproducts = () => {
//  const wishlist = useSelector((state) => state.cart.wishlistitem);
//  const dispatch=useDispatch()
//   const{search}=useContext(searchcontext);
//     const searchfilter=womenitems.filter((item)=>`${item.name}`.toLowerCase().includes(search.toLowerCase()))
  
//   return (
// <div className='flex gap-5 flex-wrap justify-center items-center my-10'>
//   {searchfilter.map((item) => (
//     <div 
//       key={item.id}
//       className="bg-neutral-primary-soft h-[380px] w-[330px] px-6 pt-6  shadow-2xl flex flex-col relative"
//     >
//       <img
//         className="relative rounded-base object-cover w-full h-48 "
//         src={item.image}
//         alt={item.name}
//       />
//       <div className="absolute top-7 right-10">
//   <button
//     onClick={() => {
//       if (wishlist.some((wishItem) => wishItem.id === item.id)) {
//         dispatch(removeFromwish(item.id));
//       } else {
//         dispatch(addtowish(item));
//       }
//     }}
//   >
//     {wishlist.some((wishItem) => wishItem.id === item.id)
//       ? <FavoriteIcon color="error" />
//       : <FavoriteBorderIcon />}
//   </button>
// </div>

//       <div className='flex flex-col gap-3 mt-4 flex-grow'>
//        <Link to={`/womenview/${item.id}`}> <h5 className="text-2xl font-bold tracking-tight text-heading">
//           {item.name}
//         </h5></Link>
//         <p className='text-xs'>ELON COUTURE</p>
//         <p  className='text-xs'>
//           {item.description}
//         </p>

//         <div className='flex gap-7 mb-3'>
//           <Link to={`/womenview/${item.id}`}>
//           <Button
//             variant="contained"
//             fullWidth
//             className='bg-black border border rounded-xl text-xs'
//             sx={{backgroundColor:'black' ,font:"0.75rem"}}
//           >
//             view
//            <span > <KeyboardArrowRightIcon/></span>
//           </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

//   )
// }

// export default Womenproducts