import React, { useState } from "react";
import banner from "../../img/Menu/Banner.jpg";
import "./Menu.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { Womenclother } from "../../Pages/Women/WomenClother";
import Women from "../../img/Menu/Women.png";
import Men from "../../img/Menu/Men.png";
import Accessories from "../../img/Menu/Accessories.jpg";
import "../Slider/Slider.css";

import btnNext from "../../img/Menu/chevron-right 1.svg";
import btnPrev from "../../img/Menu/chevron-left 1.svg";
export const Menu = ({ imgSlider }) => {
  const [numbers, setNumbers] = useState(4);
  const showPrevSlide = () => {
    if (numbers > 1) {
      setNumbers(numbers - 1);
    } else setNumbers(imgSlider.length);
  };

  const showNextSlide = () => {
    if (numbers <= imgSlider.length - 1) {
      setNumbers(numbers + 1);
    } else setNumbers(1);
  };

  return (
    <div className="menu">
      <div className="menu__slider">
        <img src={banner} />
        <button
          onClick={showPrevSlide}
          className=" btn btn-circle btn-slider btn-slider-prev"
          type="button"
        >
          <img src={btnPrev} alt="icon" />
        </button>
        <button
          onClick={showNextSlide}
          className=" btn btn-circle btn-slider btn-slider-next"
          type="button"
        >
          <img src={btnNext} alt="icon" />
        </button>
        <div className="menu__text slider__block">
          <p className="menu__text-small">Banner</p>
          <p className="menu__text-big">You Title Text</p>
        </div>
      </div>
      <div className="menu__items">
        <div className="menu__item-small small__items">
          <div className="menu__item small__item small__item-women">
            <img src={Women} />
            <NavLink to="/women" className="menu__text">
              Women
            </NavLink>
          </div>
          <div className="menu__item small__item small__item-men">
            <img src={Men} />
            <NavLink to="/men" className="menu__text">
              Men
            </NavLink>
          </div>
        </div>
        <div className="menu__item menu__item-big">
          <img src={Accessories} />
          <button className="menu__text">Accessories</button>
        </div>
      </div>
    </div>
  );
};
