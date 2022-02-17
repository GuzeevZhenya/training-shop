import React from "react";

import ProductHeader from "../../Components/Product/ProductHeader";
import { ProductSection } from "../../Components/Product/ProductSection";
import { ProductRelated } from "../../Components/Product/ProductRelated";
export const Product = ({ data, link }) => {

  console.log(link)
  return (
    <div className="container">
      <ProductHeader />
      <ProductSection />
      <ProductRelated />
    </div>
  );
};
