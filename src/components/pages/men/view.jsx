import React from 'react'
import Menitems from '../../ui/api'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useDispatch} from 'react-redux'
import { searchcontext } from '../../../searchprovider';
import { addToCart } from '../../../slice/cartslice';
const View = () => {
    const {id} = useParams()
    const productId = Number(id)
    const data = Menitems.find((item) => item.id ===productId)
  const navigate =useNavigate()
    const totalProducts = Menitems.length
    console.log(totalProducts)
   const dispatch=useDispatch()
  return (
    <>
      <div className="grid grid-cols-2 gap-10 p-10 ">
      <img
        className="w-full h-[600px] object-contain"
        src={data.image}
        alt="product"
      />

      <div className="mt-5 flex  flex-col   ">
        <p className="font-light">New</p>
        <p className="text-xl font-semibold">
          {data.name.toUpperCase()}
        </p>

        <br />

        <p className="text-lg font-bold">₹{data.price}</p>
        <p className="font-light">
          (M.R.P inclusive of all taxes)
        </p>

        <br />

        <p className="font-bold">Category</p>
        <p>{data.category}</p>

        <br />

        <p className="font-bold">Description</p> 
        <p>{data.description}</p>
       <div className='flex gap-5 mt-5'>  
        <Button variant="contained"
            sx={{backgroundColor:'black'}} disabled={data.id === 1} onClick={()=> navigate(`/view/${data.id - 1}`)}>prev</Button>

           <Button variant="contained" 
            sx={{ backgroundColor: 'black'}}disabled={data.id ===50} onClick={()=>navigate(`/view/${data.id +1}`)}>next
              <span className='ml-5 mr-0'><KeyboardArrowRightIcon></KeyboardArrowRightIcon></span></Button>

             
            <Button
            variant="contained"
           onClick={()=>{dispatch(addToCart(data))}}
            className='bg-black border border rounded-xl '
            sx={{backgroundColor:'black'}}
          >
            Add to Cart 
           <span > <KeyboardArrowRightIcon/></span>
          </Button>
      </div>
        </div>
        </div>
    </>
  )
}

export default View