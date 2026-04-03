import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import banner1 from "../../../assets/bag.jpeg";
import banner2 from "../../../assets/dress.jpeg";
import banner3 from "../../../assets/kidshomme.jpeg";
import banner4 from "../../../assets/shirt.jpeg";
import banner5 from "../../../assets/baghome.jpeg";
import banner6 from "../../../assets/kidhome.jpeg";
import banner7 from "../../../assets/shoe.png";
import { Navigation, Autoplay } from "swiper/modules";

const banner = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
];

const Womenslider = () => {
  return (

<>
 {/* PREV BUTTON */}
  <div className="prev-btn absolute left-2 top-1/2 -translate-y-1/2 z-10 
    bg-white/80 backdrop-blur-md hover:bg-black hover:text-white 
    text-black p-3 rounded-full shadow-lg cursor-pointer transition duration-300">
  <ArrowBackIosIcon/>       
  </div>

  {/* NEXT BUTTON */}
  <div className="next-btn absolute right-2 top-1/2 -translate-y-1/2 z-10 
    bg-white/80 backdrop-blur-md hover:bg-black hover:text-white 
    text-black p-3 rounded-full shadow-lg cursor-pointer transition duration-300">
  <ArrowForwardIosIcon/>
  </div>
    
    <Swiper
      slidesPerView={3.2}
      spaceBetween={0}
      // navigation={true}
      navigation={{
  nextEl: ".next-btn",
  prevEl: ".prev-btn",
}}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
    >
      {banner.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white shadow-lg p-4 rounded">

            <img
              src={item}
              className="w-[450px] h-[350px] object-cover rounded shadow-2xl"
              alt="banner"
            />

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
</>  );
};

export default Womenslider;