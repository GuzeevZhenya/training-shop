import React,{useState} from 'react';
import {FreeMode, Navigation, Thumbs} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Clotheritem } from '../Clothers/ClotherItem/ClotherItem'
 
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
import { clothersItems } from '../../ClothersBd';

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
        
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <SwiperSlide className='product__slide'>
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


export const RelatedSlider = ({itemList}) => {
  const slides = [];
  for (let i = 0; i < itemList.length; i++){
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <Clotheritem itemList={itemList[i]} />
    </SwiperSlide>
    )
    
  }
  
  return (
    <>
      <div className="related__head">
        <h3 className="related__title">RELATED PRODUCTS</h3>
        <div className="related__buttons">
          <button className="related__btn related__btn-prev"/>
          <button className="related__btn related__btn-next"/>
        </div>
      </div>
      <Swiper data-test-id="related-slider"
        loop={true}
        modules={[Navigation]}
        navigation={{
          nextEl: '.related__btn-next',
          prevEl: '.related__btn-prev'
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          530: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1100: {
            slidesPerView: 4
          },
          1440: {
            slidesPerView: 4
          }
        }}
      >
      {itemList.map((item) =>
        <SwiperSlide className="clother__item">
          <img src={item.img} alt={item.text} />
          <p className="clother__text">{item.text}</p>
          <p className="clother__price-new">
          {item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
            </p>
        </SwiperSlide>
        )}
        
      </Swiper>
    </>
  );
};