import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {womenitems} from "../../ui/api"
import { Link } from 'react-router-dom';
import { searchcontext } from '../../../searchprovider';
const Womenproducts = () => {
  const{search}=useContext(searchcontext);
    const searchfilter=womenitems.filter((item)=>`${item.name}`.toLowerCase().includes(search.toLowerCase()))
  
  return (
<div className='flex gap-5 flex-wrap justify-center items-center my-10'>
  {searchfilter.map((item) => (
    <div 
      key={item.id}
      className="bg-neutral-primary-soft h-[400px] w-[330px] px-6 pt-6  shadow-2xl flex flex-col"
    >
      <img
        className="rounded-base object-cover w-full h-48 "
        src={item.image}
        alt={item.name}
      />

      <div className='flex flex-col gap-3 mt-4 flex-grow'>
        <h5 className="text-2xl font-bold tracking-tight text-heading">
          {item.name}
        </h5>
        <p className='text-xs'>ELON COUTURE</p>
        <p>
          {item.description}
        </p>

        <div className='mt-auto mb-3 w-20 '>
          <Link to={`/womenview/${item.id}`}>
          <Button
            variant="contained"
            fullWidth
            className='bg-black border border rounded-xl '
            sx={{backgroundColor:'black'}}
          >
            view
           <span > <KeyboardArrowRightIcon/></span>
          </Button>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

  )
}

export default Womenproducts