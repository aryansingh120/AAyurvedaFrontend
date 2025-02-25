import React from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

const ParasSkeleton = () => {
  return (
    <div className="container mx-auto p-4 relative">
      <div className="h-8 w-64 bg-gray-300 rounded animate-pulse mb-4"></div>
      <div className="flex items-center overflow-hidden relative">
        <button className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full shadow-md">
          <FaArrowLeft size={20} />
        </button>
        <div className="flex space-x-4 w-full">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0">
              <div className="bg-white rounded-lg p-4 m-2 flex-1 transition-shadow duration-300 hover:shadow-md relative group">
                <div className="absolute top-0 left-0 bg-gray-300 h-6 w-16 rounded-tr-lg rounded-bl-lg animate-pulse"></div>
                <div className="h-48 w-full bg-gray-300 rounded-md animate-pulse"></div>
                <div className="mt-2 h-6 w-3/4 bg-gray-300 rounded animate-pulse"></div>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-gray-300" size={16} />
                  ))}
                  <div className="ml-2 h-4 w-16 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="mt-2 h-6 w-1/2 bg-gray-300 rounded animate-pulse"></div>
                <div className="mt-2 h-6 w-2/3 bg-gray-300 rounded animate-pulse"></div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                  <button className="bg-gray-300 text-transparent py-2 px-4 w-full rounded animate-pulse">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full shadow-md">
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ParasSkeleton;
