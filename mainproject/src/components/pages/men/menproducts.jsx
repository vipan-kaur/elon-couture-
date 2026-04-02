import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtowish, removeFromwish } from '../../../slice/cartslice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ProductCard from '../productCard';

const Menproducts = () => {
  const [MenItems, setMenItems] = useState([]); 
  const wishlist = useSelector((state) => state.cart.wishlistitem);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products/men");
        const data = await response.json();
        console.log("data",data)
        setMenItems(data.AllProduct || data); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (

    <ProductCard category={MenItems}></ProductCard>
  )
}

export default Menproducts;


