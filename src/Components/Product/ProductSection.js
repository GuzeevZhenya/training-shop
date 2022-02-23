import React from "react";

import main from "../../img/Product/Main.png";
import "./ProductSection.css";

import small1 from "../../img/Product/smallvers1.png";
import small2 from "../../img/Product/smallvers2.png";
import small3 from "../../img/Product/smallvers3.png";
import small4 from "../../img/Product/smallvers4.png";

import color1 from "../../img/Product/color1.png";
import color2 from "../../img/Product/color2.png";
import color3 from "../../img/Product/color3.png";
import color4 from "../../img/Product/color4.png";

import { Productselect } from "./ProductSelect";
import { ProductSlider } from "../Sliders/Sliders";

const productDb = {
  small: [small1, small2, small3, small4],
  color: [
    {
      id: 1,
      img: color1,
      color: "blue",
    },
    {
      id: 2,
      img: color2,
      color: "red",
    },
    {
      id: 3,
      img: color3,
      color: "black",
    },
    {
      id: 4,
      img: color4,
      color: "white",
    },
  ],
  size: ["XS", "S", "M", "L"],
};

export const ProductSection = () => {
  return (
    <div className="product__block">
     <ProductSlider/>
    <Productselect />
    </div>
  );
  
};
