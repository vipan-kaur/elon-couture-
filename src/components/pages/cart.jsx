import React from "react";
import { Typography, Button, Badge } from "@mui/material";
import Menitems from "../ui/api";
import { useDispatch, useSelector } from "react-redux";
import { decQuantity,incQuantity,removeFromCart } from "../../slice/cartslice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
 const cartItems = useSelector((state) => state.cart.cartitem);
const subtotal = cartItems.reduce((sum,item)=>sum+ item.price *item.quantity,0)
const dispatch=useDispatch()
const navigate=useNavigate()
const totalQuantity = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);
  return (<>

    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <Typography variant="h6" sx={{ fontWeight: 'bold' }} className="flex font-bold text-gray-800 justify-center items-center pb-10" >
        Your Shopping Cart
       
      </Typography>

      <div className="flex flex-col gap-6">
        {/* Cart Items */}
        <div className="flex-1 flex flex-col gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border rounded-lg shadow hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded"
            />

            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{item.name}</h2>

              <div className="flex items-center mt-1">
                <button
                  onClick={() => dispatch(decQuantity(item.id))}
                  className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                <button
                  onClick={() => dispatch(incQuantity(item.id))}
                  className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>

              <p className="font-bold mt-2 text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 font-semibold hover:underline mt-2 sm:mt-0"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

        {/* Summary */}
        <div className="flex justify-center items-center w-full">
       
        <div className="bg-white p-6 w-1/2  rounded-lg shadow space-y-4 h-fit ">
          <Typography variant="h6" className="font-bold">
            Order Summary
          </Typography>
          <div className="flex justify-between">
            <Typography variant="body1">Subtotal</Typography>
            <Typography variant="body1" className="font-semibold">
              ${subtotal}
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography variant="body1">Shipping</Typography>
            <Typography variant="body1" className="font-semibold">
              $10
            </Typography>
          </div>
          <div className="flex justify-between border-t pt-2">
            <Typography variant="h6" className="font-bold">
              Total
            </Typography>
            <Typography variant="h6" className="font-bold">
              ${subtotal + 10}
            </Typography>
          </div>
           <div className="flex justify-center ">  
          <Button
            variant="contained"
            color="primary"
            className="w-1/4 mt-4 py-2 "
            onClick={()=>navigate("/checkout")}
          >
            Proceed to Checkout
          </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
</>  );
};

export default Cart;