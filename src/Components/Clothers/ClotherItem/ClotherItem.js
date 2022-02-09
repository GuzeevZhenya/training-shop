import React, { useState } from 'react';

import './ClotherItem.css';

const sortingItems = [
  'NEW ARRIVALS',
  'SPECIALS',
  'BESTSELLERS',
  'MOST VIEWED',
  'FEATURED PRODUCTS',
];

export const ClotherItem = ({ itemList, clotherName }) => {
  const [ clothers, setClothers ] = useState(itemList);
  const [ active, isActive ] = useState('');

  const itemFilter = (e) => {
    switch (e) {
      case 'NEW ARRIVALS':
        const newArrivals = itemList.filter((item) => item.newArrivals === true);
        setClothers(newArrivals);
        break;

      default:
        setClothers(itemList);
    }
    isActive(e);
  };

  const sort = sortingItems.map((item) => (
    <li id={item} className={item === active && 'active'} onClick={(e) => itemFilter(e.target.id)}>
      {item}
    </li>
  ));

  return (
    <div className="clother">
      <div className="clother__main">
        <h1 className="clother__main-title">{clotherName}</h1>
        <ul className="clother__main-sorting">{sort}</ul>
      </div>

      <ul className="clother__list">
        {clothers.map((item) => (
          <li className="clother__item" key={item.id}>
            <img src={item.img} alt={item.name} />
            {item.discount && <span className="clother__discount">{-item.discount + '%'}</span>}
            <p className="clother__text">{item.text}</p>
            <div className="clother__info">
              <p className="clother__price">
                {item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </p>
              {item.discount ? (
                <span className="clother__discount-price">
                  {((item.price*100)/(100-item.discount).toFixed(2)).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
      <button className='clother__btn'>See all</button>
    </div>
  );
};
