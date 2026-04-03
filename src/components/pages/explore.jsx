import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleProductCard from "./productCard"; 

const Exploreall = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getallProducts");
        setproducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex gap-5 flex-wrap justify-center items-center my-10">
      {products.map((product) => (
        <SingleProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Exploreall;