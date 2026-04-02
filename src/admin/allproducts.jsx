import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const Allproducts = () => {
  const [data, setdata] = useState([])
  const [hoverIndex, setHoverIndex] = useState({}) // track image index per product

  useEffect(() => {
    const getall = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products")
        const result = await response.json()
        setdata(result.product || [])
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    getall()
  }, [])

  const handleIn = (id, imagesLength) => {
    if (imagesLength > 1) {
      setHoverIndex((prev) => ({ ...prev, [id]: 1 })) // show second image
    }
  }

  const handleOut = (id) => {
    setHoverIndex((prev) => ({ ...prev, [id]: 0 })) // back to first image
  }

  return (
    <div className="mt-20 ml-20">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
        All Products
      </h1>

      {/* GRID layout */}
      <div className="flex flex-wrap gap-8 justify-center">
        {data.map((product) => {
          const index = hoverIndex[product._id] || 0

          return (
            <div
              key={product._id}
              className="relative bg-neutral-primary-soft md:h-[430px] w-[330px] px-6 pt-6 shadow-2xl flex flex-col"
            >
              <img
                onMouseEnter={() => handleIn(product._id, product.images?.length)}
                onMouseLeave={() => handleOut(product._id)}
                src={`http://localhost:3000/uploads/${product.images?.[index]}`}
                alt={product.title}
                className="w-full h-[200px] object-cover"
              />

              <div className="flex flex-col gap-3 mt-4 flex-grow">
                <h5 className="text-2xl font-bold tracking-tight text-heading">
                  {product.title}
                </h5>

                <p className="text-xs">ELON COUTURE</p>
                <p className="text-xs">{product.description}</p>
                <p className="text-xs font-semibold">₹ {product.price}</p>

                <div className="flex gap-7 mb-3">
                  <Link to={`/view/${product._id}`}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: 'black' }}
                    >
                      View <KeyboardArrowRightIcon />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Allproducts