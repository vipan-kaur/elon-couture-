// import React from "react";
// import { Typography, Button, Badge } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { decQuantity,incQuantity,removeFromCart } from "../slice/cartslice";
// import { useNavigate, useParams } from "react-router-dom";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { removeFromwish } from "../slice/cartslice";
// import { Link } from "react-router-dom";
// const Wishlist = () => {
//  const cartItems = useSelector((state) => state.cart.wishlistitem);

// const {id }=useParams()
// const productId =Number(id)
// const subtotal = cartItems.reduce((sum,item)=>sum+ item.price *item.quantity,0)
// const dispatch=useDispatch()
// const navigate=useNavigate()
// const totalQuantity = cartItems.reduce(
//   (sum, item) => sum + item.quantity,
//   0
// );


//   return (<>

//     <div className="min-h-screen bg-gray-100 p-6 md:p-12">
//       <Typography variant="h6" sx={{ fontWeight: 'bold' }} className="flex font-bold text-gray-800 justify-center items-center pb-10" >
//        {cartItems==0 ? "See something you love? Add it to your wishlist": "your wishlist"}
       
//       </Typography>

//       <div className="flex flex-col gap-6">
//         {/* Cart Items */}
//         <div className="flex-1 flex flex-col gap-6">
//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border rounded-lg shadow hover:shadow-md transition"
//           >
//          <Link to={`/view${item.id}`}>   <img
//               src={item.image}
//               alt={item.name}
//               className="w-32 h-32 object-cover rounded"
//             />
// </Link>
//             <div className="flex-1 flex flex-col gap-2">
//               <h2 className="text-lg font-semibold">{item.name}</h2>

//               <p className="font-bold mt-2 text-gray-800">
//                 ${(item.price.toFixed(2))}
//               </p>
//             </div>

//             <button
//               className="text-red-500 font-semibold hover:underline mt-2 sm:mt-0"
//                 onClick={() => {
//                     if (cartItems.some((wishItem) => wishItem.id === item.id)) {
//                       dispatch(removeFromwish(item.id));
//                     } else {
//                       dispatch(addtowish(item));
//                     }
//                   }}
//             >
//               {cartItems.some((wishItem) => wishItem.id === item.id)
//       ? <FavoriteIcon color="error" />
//       : <FavoriteBorderIcon />}
//   </button>
           
//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
// </>  );
// };

// export default Wishlist;


import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img1 from '../assets/menpg/menslide1.png';
import img2 from '../assets/menpg/menslide2.png'
import img3 from '../assets/menpg/menslide3.png'

const Wishlist = () => {
  const h3="absolute bottom-15 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-lg"
  const p='absolute underline text-white cursor-pointer text-sm bottom-10  left-20'
  return (
    <>
    <div className='w-screen p-10 flex '>
      <div className='w-1/4 flex flex-col gap-4  justify-center items-center p-8'>

      <FavoriteBorderIcon fontSize='large'/>
       <p className='bg-gray-100'>Keep track of all the items you love. Click the heart icon on each product image to save your favorites in a wishlist.</p>
      </div >
   
      <div className="w-3/4 flex flex-col gap-6 p-10">
    
      
            <h1 className="text-lg border-b pb-2">Make Your Wishlist</h1>
    
     
            <div className="flex gap-6">
              <div className='relative'>
              <img src={img1} className="w-60 h-60 object-cover" />
              <h3 className={h3}> Men Collection </h3>
        <p className={p}>Explore now</p>          </div>
    
          
              <div className='relative'>
              <img src={img2} className="w-60 h-60 object-cover" />
              <h3 className={h3}> Women Collection </h3>
        <p className={p}>Explore now</p>          </div>
    
         <div className='relative'>
              <img src={img3} className="w-60 h-60 object-cover" />
              <h3 className={h3}> Kids collection  </h3>
        <p className={p}>Explore now</p>          </div>
    
    
            </div>
    
    </div>
    </div>
    </>
  )
}

export default Wishlist


