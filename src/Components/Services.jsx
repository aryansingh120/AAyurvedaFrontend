import { Link } from 'react-router-dom';
import "./Service.css"
import { useEffect,useState } from 'react';
import axios from 'axios';

const Services = () => {
    let imgArr=[{img1:"/photos/mobile1.webp",text1:"Sell Phone"},{img1:"/photos/mobile2.webp",text1:"Buy Phone"},{img1:"/photos/laptop.webp",text1:"Buy Laptops"},{img1:"/photos/mobile3.webp",text1:"Repair Phone"},{img1:"/photos/mobile4.webp",text1:"Find New Phone"},{img1:"/photos/home.webp",text1:"Nearby Stores"},{img1:"/photos/dustbin.webp",text1:"Recycle"},{img1:"/photos/watch.webp",text1:"Buy Smartwatches"}];

    let img2Arr=[{img1:"/photos/mobile1.webp",text1:"Sell Phone"},{img1:"/photos/laptop2.webp",text1:"Sell Laptop"},{img1:"/photos/Tv.webp",text1:"Sell TV"},{img1:"/photos/tablet.webp",text1:"Sell Tablet"},{img1:"/photos/game.webp",text1:"Sell Gamming Consoles"},{img1:"/photos/smartwatch.webp",text1:"Sell Smartwatch"},{img1:"/photos/speakers.webp",text1:"Sell Smart Speakers"},{img1:"/photos/3dot.webp",text1:"Sell More"}];

    let mobileArr=[{text1:"28,400 OFF",img1:"/photos/phone1.webp",text2:"Apple iphone 12-Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"apple Bumper Sale",text5:"-55%",text6:"31,099",text7:"55,499",text8:"effective price",text9:"26,316"},
    {text1:"21,000 OFF",img1:"/photos/mobile5.webp",text2:"Apple iphone 11-Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(365)",text4:"apple Bumper Sale",text5:"-53%",text6:"18,499",text7:"39,499",text8:"effective price",text9:"17,944"},{text1:"32,400 OFF",img1:"/photos/mobile6.webp",text2:"Apple iphone 13-Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(239)",text4:"apple Bumper Sale",text5:"-50%",text6:"46,099",text7:"70,499",text8:"effective price",text9:"20,316"},{text1:"48,400 OFF",img1:"/photos/mobile7.webp",text2:"Apple iphone 12-Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"apple Bumper Sale",text5:"-47%",text6:"26,099",text7:"58,499",text8:"effective price",text9:"28,316"},{text1:"28,400 OFF",img1:"/photos/mobile8.webp",text2:"Apple iphone 12-Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"apple Bumper Sale",text5:"-49%",text6:"25,099",text7:"52,499",text8:"effective price",text9:"30,316"},{text1:"28,400 OFF",img1:"/photos/macbook.webp",text2:"Apple macbook-Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"apple Bumper Sale",text5:"-51%",text6:"29,099",text7:"60,499",text8:"effective price",text9:"24,316"}];


    let icon=<svg class="h-4 w-4 text-black-500 inline "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 6h-11h3a4 4 0 0 1 0 8h-3l6 6" />  <line x1="7" y1="10" x2="18" y2="10" /></svg>;

    let icon2= <svg class="h-6 w-5 text-black-500 inline "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 6h-11h3a4 4 0 0 1 0 8h-3l6 6" />  <line x1="7" y1="10" x2="18" y2="10" /></svg>; 
    
    const [count,setCount]=useState([])
    const fetchData=async()=>{
      try {
       
        const receive=await axios.get("https://aayurveda-1.onrender.com/home/receiveProductImg");
       const x=receive.data;
       const z=x.map((item)=>item.url)
        setCount(z);
        console.log(z);
        
    
      } catch (error) {
        console.log("error",error.message);
         
      }
      
    }
  
    useEffect(()=>{
      fetchData();
    },[])

  return (
    <div className='mx-[2vw]'>
    {/* <img src="/photos/cash2.webp" alt="img not available" /> */}
        <p className='text-[20px] font-bold md:text-[22px] xl:text-[25px] '>Our Products</p>
        <div className='pt-[1.5rem] flex flex-row flex-wrap gap-[3vw] md:gap-[1.5vw] xl:gap-[1.53vw]'>
        {
            count.map((item,index)=>{
                return (
                    <Link to={"/details"} key={index} className='w-[22.6%] flex flex-col overflow-hidden md:w-[11%]'>
                        <img src={item} alt="img not available" className='mb-[1.4vh]' />
                        <p className='text-center text-[12px] font-bold    md:font-medium'>{item.text1}</p>
                    </Link>
                )
            })
        }
</div>
{/* <p className='text-[20px] font-bold md:text-[22px] xl:text-[25px]  mt-[3rem] capitalize '>Sell your old device now</p>
<div className='pt-[1.5rem] flex flex-row flex-wrap gap-[3vw] md:gap-[1.5vw] xl:gap-[1.53vw]'>
        {
            img2Arr.map((item,index)=>{
                return (
                    <div key={index} className=' w-[22.6%] flex flex-col overflow-hidden md:w-[11%]'>
                    <Link to={"/details"}>
                        <img src={item.img1} alt="img not available" className='mb-[1.4vh]' />
                        <p className='text-center text-[12px] font-bold    md:font-medium'>{item.text1}</p>
                    </Link>
                    </div>
                )
            })
        }


</div>


<p className=' mt-[3rem] text-[20px] font-bold md:text-[22px] xl:text-[25px] '>Buy Referbuished Phones</p>
<div className='flex'>
<p className='inline-block '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10  bg-[white] rounded-full sm:size-14 transform absolute mt-[11rem]">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
</svg>
</p>

       
<div className=' flex overflow-x-scroll mt-[1.5rem] paras gap-[2rem]'>
    {
        mobileArr.map((item,index)=>{
            return (
                <div className={`border rounded-xl w-[13rem] flex-shrink-0 overflow-hidden sm:w-[16rem] ` } key={index} >
                <Link to={"/Mobiledetails"}>
                    <button className=' flex text-[10px] font-extrabold bg-[#F4B146] py-[1vh] px-[2vw] rounded-br-[1.5rem]  transform sm:py-[1.5vh] sm:text-[13px]'>{icon}{item.text1}</button>
                    <img src={item.img1} alt="img not available" className='h-[19vh] ml-[4vw] mt-[-2vh] sm:h-[22vh]' />
<div className='pl-[3vw] sm:pl-[2vw] '>
                    <p className='font-extrabold text-[2.2vh]'>{item.text2}</p>
                    {
                        item.img2.map((item,index)=>{
                            return <img key={index} src={item} alt="img not available" className='inline-block h-[2vh] mt-[1vh] sm:h-[2.5vh]'  />
                        })
                    }
                    <p className='inline-block transform translate-y-[.7vh] ml-[3vw] text-[#747070] font-bold sm:ml-[1vw]'>{item.text3}</p>
                    <button className=' block capitalize bg-[#1D3D93] text-white font-bold px-[3vw] py-[1vh] rounded-lg mt-[2vh] text-[1.5vh] mb-[2vh] sm:text-[2vh] sm:px-[1.5vw] sm:py-[.7vh]'>{item.text4}</button>
                    <p className=' text-[#FE6461] font-bold inline sm:text-[3vh]'>{item.text5}</p>
                    <p className='inline-block ml-[1vw] transform translate-y-[-.3vh] sm:ml-[.4vw]'>{icon2}</p>
                    <p className='inline-block font-bold  sm:text-[3vh]'>{item.text6}</p>
                    <p className='inline-block font-bold ml-[1.3vw] text-[#7c7b7b] line-through mb-[1vh] sm:text-[3vh] sm:ml-[.5vw]'>{item.text7}</p> <br />
                    <p className='capitalize inline-block text-[1.8vh] text-[#858484] sm:text-[2vh] sm:font-medium'>{item.text8}</p>
                    <p className='inline-block ml-[.5vw] transform translate-y-[-.3vh]'>{icon2}</p>
                    <p className='inline-block font-bold sm:text-[3vh] '>{item.text9}</p>
                    </div>
                    </Link>
                    
                    </div>
            )
        })
    }

</div>
<p className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 bg-white rounded-full sm:size-14 transform absolute ml-[-2.9rem] sm:ml-[-3.9rem]  mt-[11rem]"> 
 <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
 </svg> 
</p> 
</div>

<img src="/photos/car.webp" alt="img not available" className='mt-[2rem] w-[100%]' />


 */}

    </div>
  )
}

export default Services
