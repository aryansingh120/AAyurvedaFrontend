import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';

const ScrollSkeleton = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
  };

  return (
    <div className="overflow-hidden">   
      <div className="px-[.2rem] mt-[2rem] overflow-hidden">
        <Slider {...settings}>
          {Array(3).fill(0).map((_, index) => (
            <div key={index} className="h-[250px] md:h-[400px] w-full bg-gray-300 animate-pulse rounded-md"></div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ScrollSkeleton;
