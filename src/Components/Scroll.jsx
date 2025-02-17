import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';
import axios from "axios";
import { useEffect, useState } from "react";

const Scroll = () => {
const [count,setCount]=useState([])
  const fetchData=async()=>{
    try {
     
      const receive=await axios.get("https://aayurveda-1.onrender.com/home/receiveImg");
     const x=receive.data;
     const z=x.map((item)=>item.url)
      setCount(z);
  
    } catch (error) {
      console.log("error",error.message);
       
    }
    
  }

  useEffect(()=>{
    fetchData();
  },[])


  const settings = {
    dots: true,
    infinite: true, // Looping infinite
    speed: 500, // Slide animation speed
    autoplay: true, // Automatic scrolling
    autoplaySpeed: 2000, // 2 seconds delay
    slidesToShow: 1, // Only one image per view
  };

  return (
    <div className="overflow-hidden">   
     <div className="px-[.2rem] mb-[2rem]">
    <Slider {...settings}  >
     {
        count.map((item,index)=>{
            return <img src={item} key={index} alt="img not available" className=" rounded-md" />
        })
     }
    </Slider>
    </div>
    </div>

  );
};

export default Scroll; 
