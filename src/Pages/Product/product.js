import React from "react";

import {
  useParams,useLocation
} from "react-router-dom";

import ProductHeader from "../../Components/Product/ProductHeader";
import { ProductSection } from "../../Components/Product/ProductSection";
import { ProductRelated } from "../../Components/Product/ProductRelated";
import { clothersItems } from "../../ClothersBd";
export const Product = ({ name, link }) => {

  let { id} = useParams();
  console.log(name)
  return (
    <div className="container">
      <ProductHeader data={clothersItems.men} id={id} nameProduct="men"/>
      <ProductSection />
      <ProductRelated />
    </div>
  );
};
