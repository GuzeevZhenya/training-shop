import React from "react";
import "./Star.css";

const ratings = [undefined, undefined, undefined, undefined, undefined];

export const Star = ({ star }) => {
  return (
    <div className="card__rating">
      {ratings.map((rating, index) => (
        <div className="card__rating-item" key={`star${index}`}>
          {
            <div
              className={
                index + 1 <= star
                  ? "card__rating-star--fill"
                  : "card__rating-star"
              }
            />
          }
        </div>
      ))}
    </div>
  );
};
