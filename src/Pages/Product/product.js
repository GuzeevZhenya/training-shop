import React, { useSta } from "react";

import { useParams } from "react-router-dom";

import ProductHeader from "../../Components/Product/ProductHeader";
import { ProductSection } from "../../Components/Product/ProductSection";
import { ProductRelated } from "../../Components/Product/ProductRelated";
import { clothersItems } from "../../ClothersBd";
export const Product = () => {
  let { id, url } = useParams();

  return (
    <div className="container">
      <ProductHeader data={clothersItems[url]} id={id} url={url} />
      <ProductSection />
      <ProductRelated />
    </div>
  );
};
