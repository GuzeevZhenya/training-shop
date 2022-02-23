import React,{useState} from 'react';
import {FreeMode, Navigation, Thumbs} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
 
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/thumbs/thumbs.min.css';
 
import "./Sliders.css";
import main from "../../img/Product/Main.png";

import small1 from "../../img/Product/smallvers1.png";
import small2 from "../../img/Product/smallvers2.png";
import small3 from "../../img/Product/smallvers3.png";
import small4 from "../../img/Product/smallvers4.png";

const small = [small1,small2,small3,small4]



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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>

  <div className="swiper__container">
  <div className="product-preview__buttons">
  <button className="product-preview__button btn-up"/>
  <button className="product-preview__button btn-down"/>
</div>
<Swiper
  onSwiper={setThumbsSwiper}
  freeMode={true}
  direction={"vertical"}
  watchSlidesProgress={true}
  modules={[FreeMode, Navigation, Thumbs]}
  navigation={{
    nextEl: '.btn-up',
    prevEl: '.btn-down'
  }}
  spaceBetween={30}
  slidesPerView={4}

>
  {
    small.map((img, index) =>
      <SwiperSlide key={`preview-slide-${index}`}
      >
        <img
          className="product-preview__slide"
          src={small[index]}
          alt="product-preview"/>
      </SwiperSlide>
    )
  }
</Swiper>
  </div>
      <Swiper
        navigation
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <SwiperSlide>
          <img src={main} alt="slide1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={main} alt="slide2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={main} alt="slide3"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={main} alt="slide4"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={main} alt="slide5"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
};