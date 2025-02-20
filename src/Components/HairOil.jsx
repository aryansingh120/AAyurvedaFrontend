import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

const HairOil = () => {
  const [products, setProducts] = useState([]);

  const receive=async(req,res)=>{
    try {
        const fetchData=await axios.get("https://aayurveda-1.onrender.com/productData/hairoilProducts");
        const x = fetchData.data.allProducts;
        console.log(x);
        
      setProducts(x);
        
    } catch (error) {
        console.log("error",error);
        
        
    }
  }
  useEffect(()=>{
    receive();
  },[])
  
  return (
    <div className="container mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-6">Our Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-green-100 shadow-lg rounded-lg overflow-hidden">
          <img
            src={product.url}
            alt={product.name}
            className=" object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <div className="flex items-center mt-2">
              <span className="text-gray-900 font-bold">${product.price}</span>
              {product.discount && (
                <span className="text-sm text-gray-500 line-through ml-2">${product.discount}</span>
              )}
            </div>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default HairOil;
