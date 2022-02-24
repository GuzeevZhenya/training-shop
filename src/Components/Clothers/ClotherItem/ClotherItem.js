import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Star } from "../ClotherInfo/Star/Star";
import "./ClotherItem.css";

export const Clotheritem = ({ itemList, clotherName }) => {
 
  const [clothers, setClothers] = useState(itemList);
   
  return (
    <>
      {clothers.map((item) => (
        <NavLink
          to={`/${clotherName}/${item.id}`}
          className="clother__item"
          key={item.id}
        >
          <img src={item.img} alt={item.name} />
          {item.discount && (
            <span className="clother__discount">{-item.discount + "%"}</span>
          )}
          <p className="clother__text">{item.text}</p>
          <div className="clother__info">
            <div className="clother__price">
              <p className="clother__price-new">
                {item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              {item.discount ? (
                <span className="clother__price-discount">
                  {(
                    (item.price * 100) /
                    (100 - item.discount).toFixed(2)
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              ) : null}
            </div>
            <Star star={item.stars} />
          </div>
        </NavLink>
      ))}
    </>
  );
};
