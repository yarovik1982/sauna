import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
export default function AppSlider() {
   
  return (
    <>
      <Swiper 
       navigation 
       pagination={{ clickable: true }}
       spaceBetween={50}
       slidesPerView={3}
       modules={[Pagination, Navigation, Autoplay]} 
       className="mySwiper"

   >
        <SwiperSlide>
          <img src="http://placehold.it/200x200/" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.it/200x200/" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.it/200x200/" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.it/200x200/" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.it/200x200/" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.it/200x200/" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.it/200x200/" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.it/200x200/" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.it/200x200/" alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
