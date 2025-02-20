import React from 'react';
import img1 from "../assets/1nine.png";
import img2 from "../assets/1eight.png";

const CartDetails = () => {
    const products = [
        {
            image: img1,
            name: "STORITE RFID Blocking Credit/Debit Metal Card Wallet",
            description: "Set of 1, Black",
            seller: "SaiTech IT Pvt. Ltd.",
            price: 338,
            originalPrice: 3398,
            discount: "90% Off",
            delivery: "Delivery in 2 days, Sat"
        },
        {
            image: img2,
            name: "StealODeal Long-Lasting RFID Blocking Matte Black",
            description: "Set of 1, Black",
            seller: "StealODeal",
            price: 171,
            originalPrice: 499,
            discount: "65% Off",
            delivery: "Delivery by Sun Feb 23"
        }
    ];

    return (
        <div className="w-4/5 mx-auto space-y-4">
            {products.map((product, index) => (
                <div key={index} className="flex border border-gray-300 p-4 shadow-md bg-white">
                    <img className="w-32 h-32 object-cover" src={product.image} alt={product.name} />
                    <div className="ml-4 flex-1">
                        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                        <p className="text-gray-500 text-sm">Seller: <span className="text-blue-600">{product.seller}</span></p>
                        <p className="text-green-600 text-sm mt-1">{product.delivery}</p>
                        <div className="mt-2 flex items-center space-x-2">
                            <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
                            <span className="text-xl font-bold text-orange-500">₹{product.price}</span>
                            <span className="text-green-600 font-semibold">{product.discount}</span>
                        </div>
                        <div className="mt-4 flex justify-end space-x-6 pr-4">
                            <button className="bg-orange-500 text-white px-6 py-2 rounded shadow-md hover:bg-orange-600 transition">Order Now</button>
                            <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded shadow-md hover:bg-gray-400 transition">Remove</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartDetails;
