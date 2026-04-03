import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useDispatch } from 'react-redux'  
import { addToCart } from '../../../slice/cartslice';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";


const View = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)   
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const getbyid = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/getById/${id}`)
        console.log("resss",res)
        setData(res.data)   
      } catch (err) {
        console.log(err)
      }
    }
    getbyid()
  }, [id])

  if (!data) return <p>Loading...</p> 

  return (
    <div className="grid grid-cols-2 gap-10 p-10">
       <Swiper
      slidesPerView={1}
      navigation={true}
       modules={[Navigation]}>
     <SwiperSlide >
      
      <img
        className="w-full h-[600px] object-contain"
        src={`http://localhost:3000/uploads/${data.product.images[0]}`}   
        alt="product"
      />
       </SwiperSlide> 
       <SwiperSlide> 
      <img
        className="w-full h-[600px] object-contain"
        src={`http://localhost:3000/uploads/${data.product.images[1]}`}   
        alt="product"
      />

</SwiperSlide> 
</Swiper>

      <div className="mt-5 flex flex-col">
        <p className="font-light">New</p>

        <p className="text-xl font-semibold">
          {data.product.title}
        </p>

        <br />

        <p className="text-lg font-bold">₹{data.product.price}</p>
        <p className="font-light">(M.R.P inclusive of all taxes)</p>

        <br />

        <p className="font-bold">Category</p>
        <p>{data.product.category}</p>

        <br />

        <p className="font-bold">Description</p> 
        <p>{data.product.description}</p>

        <div className='flex gap-5 mt-5'>  

          <Button
            variant="contained"
            sx={{ backgroundColor: 'black' }}
          >
            prev
          </Button>

          <Button
            variant="contained"
            sx={{ backgroundColor: 'black' }}
           
          >
            next
            <KeyboardArrowRightIcon />
          </Button>

          <Button
            variant="contained" 
            onClick={() => dispatch(addToCart(data.product))}
            sx={{ backgroundColor: 'black' }}
          >
            Add to Cart
            <KeyboardArrowRightIcon />
          </Button>

        </div>
      </div>
    </div>
  )
}

export default View