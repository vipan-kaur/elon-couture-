import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ProductCard = ({ category }) => {

  return (
    <div className='flex gap-5 flex-wrap justify-center items-center my-10'>
      {category.map((product) => (
        <SingleProductCard key={product._id} product={product} />
      ))}
    </div>
  )
}


// Each product has its own state and interval
const SingleProductCard = ({ product }) => {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)


  const handleIn = () => {
    // clear previous interval just in case
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % product.images.length)
    }, 800)
    console.log(product.images)
  }

  const handleOut = () => {
    clearInterval(intervalRef.current)
    setIndex(0)
  }

  return (
    <div className="relative bg-neutral-primary-soft md:h-[430px] w-[330px] px-6 pt-6 shadow-2xl flex flex-col">
      <img
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
        src={`http://localhost:3000/uploads/${product.images[index]}`}
        alt={product.title}
        className="w-full h-[200px] object-cover"
      />
      <div className='flex flex-col gap-3 mt-4 flex-grow'>
        <h5 className="text-2xl font-bold tracking-tight text-heading">
          {product.title}
        </h5>
        <p className='text-xs'>ELON COUTURE</p>
        <p className='text-xs'>{product.description}</p>
        <p className='text-xs'>{product.price}</p>
        <div className='flex gap-7 mb-3'>
          <Link to={`/view/${product._id}`}>
            <Button
              variant="contained"
              className='bg-black border rounded-xl'
              sx={{ backgroundColor: 'black' }}
            >
              view
              <KeyboardArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard