import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Menitems from "../../ui/api"
import { Link } from 'react-router-dom';
import { searchcontext } from '../../../searchprovider';
import { addToCart } from '../../../slice/cartslice';
import {useDispatch} from 'react-redux'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Menproducts = () => {

  const{search}=useContext(searchcontext);
  const dispatch= useDispatch();
  const searchfilter =Menitems.filter((item)=>`${item.name}`.toLowerCase().includes(search.toLowerCase()))
  return (
<div className='flex gap-5 flex-wrap justify-center items-center my-10'>
  
  {searchfilter.map((item) => (
    <div
      key={item.id}
      className="relative bg-neutral-primary-soft md:h-[380px] w-[330px] px-6 pt-6  shadow-2xl flex flex-col"
    >
      <img
        className="rounded-base object-cover w-full h-48 relative"
        src={item.image}
        alt={item.name}
      />

<div className='absolute top-7 right-10  '>
  <button onClick={()=>{

  }}>
  <FavoriteBorderIcon/>
  </button>
</div>
      <div className='flex flex-col gap-3 mt-4 flex-grow'>
        <h5 className="text-2xl font-bold tracking-tight text-heading">
          {item.name}
        </h5>
        <p className='text-xs'>ELON COUTURE</p>
        <p className='text-xs'>
          {item.description}
        </p>

        <div className='flex gap-7 mb-3'>
          <Link to={`/view/${item.id}`}>
          <Button
            variant="contained"
            
            className='bg-black border border rounded-xl '
            sx={{backgroundColor:'black'}}
          >
            view
           <span > <KeyboardArrowRightIcon/></span>
          </Button> </Link>
          <Button
            variant="contained"
           onClick={()=>{dispatch(addToCart(item))}}
            className='bg-black border border rounded-xl '
            sx={{backgroundColor:'black'}}
          >
            Add to Cart 
           <span > <KeyboardArrowRightIcon/></span>
          </Button>
         
        </div>
      </div>
    </div>
  ))}
</div>

  )
}

export default Menproducts