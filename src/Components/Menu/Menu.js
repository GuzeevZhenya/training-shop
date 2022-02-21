import React, { useState,useRef } from "react";
import banner from "../../img/Menu/Banner.jpg";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import Women from "../../img/Menu/Women.png";
import Men from "../../img/Menu/Men.png";
import Accessories from "../../img/Menu/Accessories.jpg";
import "../Slider/Slider.css";

import btnNext from "../../img/Menu/chevron-right 1.svg";
import btnPrev from "../../img/Menu/chevron-left 1.svg";
import { HeroSlider } from "../Sliders/Sliders";

const img = [banner, Women,Men,Accessories];



export const Menu = ({ imgSlider }) => {
  // const [prev, setPrev] = useState(false);
  // const [next, setNext] = useState(false);


  // const slider = useRef();
  // let position = 0;

  // // const [numbers, setNumbers] = useState(4);
  // const showPrevSlide = () => {
  //   console.log('prev')
  //   // if (numbers > 1) {
  //   //   setNumbers(numbers - 1);
  //   // } else setNumbers(imgSlider.length);
  //   if (position === 0) {
  //     setPrev(true)
  //   } else {
  //     position += 430;
  //     setPrev(false);
  //     slider.current.childNodes.forEach((elem) => {
  //       elem.style = `transform:translateX(${position}px)`
  //   })
  //   }

  
  // };

  // const showNextSlide = () => {
  //   // if (numbers <= imgSlider.length - 1) {
  //   //   setNumbers(numbers + 1);
  //   // } else setNumbers(1);
  //   if (position === -(img.length - 4) * 100 + 100) {
  //     console.log(position)
  //     setPrev(false);
  //     setNext(true);
  //   } else {
  //     position -= 530;
  //     setNext(false);
  //     slider.current.childNodes.forEach((elem) => {
  //       elem.style = `transform:translateX(${position}px)`
  //   })
  //   }  
  // };

  return (
    <div className="menu">
      <div className="menu__slider" >
        <div className="menu__slider--item">
          <HeroSlider imgSlider={img}/>
        </div>
      </div>
      <div className="menu__items">
        <div className="menu__item-small small__items">
          <div className="menu__item small__item small__item-women">
            <img src={Women} alt={ Women}/>
            <NavLink to="/women" className="menu__text">
              Women
            </NavLink>
          </div>
          <div className="menu__item small__item small__item-men">
            <img src={Men} alt={Men}/>
            <NavLink to="/men" className="menu__text">
              Men
            </NavLink>
          </div>
        </div>
        <div className="menu__item menu__item-big">
          <img src={Accessories} alt={Accessories}/>
          <button className="menu__text">Accessories</button>
        </div>
      </div>
    </div>
  );
};
