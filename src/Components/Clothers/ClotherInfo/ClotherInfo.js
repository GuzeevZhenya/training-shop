import React, { useState } from 'react';

import './ClotherInfo.css';

import { Clotheritem } from '../ClotherItem/ClotherItem';

const sortingItems = [
  'NEW ARRIVALS',
  'SPECIALS',
  'BESTSELLERS',
  'MOST VIEWED',
  'FEATURED PRODUCTS',
];

export const ClotherInfo = ({ itemList, clotherName }) => {
  
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
        <Clotheritem itemList={clothers}/>
      </ul>
      <button className="clother__btn">See all</button>
    </div>
  );
};
