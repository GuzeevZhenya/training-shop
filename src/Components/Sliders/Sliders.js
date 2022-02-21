import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// import Button from "../button/Button";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import 'swiper/css/navigation';
import "./Sliders.css";
import slide1 from '../../img/Product/color3.png';



export const HeroSlider = ({imgSlider}) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={0}
      slidesPerView={1}
		>
			{imgSlider.map(item => (
				<SwiperSlide>
					<img src={item} alt="slide1" />
				</SwiperSlide>
			))}
    </Swiper>
);

};
export const ProductSlider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
          <img src={slide1} alt="slide1"/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={slide1} alt="slide2"/>
      </SwiperSlide>
      <SwiperSlide>
          <img src={slide1} alt="slide3"/>
      </SwiperSlide>

    </Swiper>
);

};