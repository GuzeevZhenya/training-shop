import React, { useState, useEffect } from 'react';

import './ClotherInfo.css';
import openMenu from '../../../img/Clothers/open-menu.svg';
import closeMenu from '../../../img/Clothers/close-menu.svg';

import { Clotheritem } from '../ClotherItem/ClotherItem';
import { Button } from '../../Button/Button';

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
  const [ click, setClick ] = useState(true);
  const [ button, setButton ] = useState(true);

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

  const HandelClick = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 750) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  const sort = sortingItems.map((item) => (
    <li id={item} className={item === active && 'active'} onClick={(e) => itemFilter(e.target.id)}>
      {item}
    </li>
  ));

  return (
    <div className="clother">
      <div className="clother__main">
        <h1 className="clother__main-title">{clotherName}'s</h1>
        <div className="clother__menu">
          <div
            className={
              button ? (
                'clother__sorting-btn__mobile'
              ) : (
                'clother__sorting-btn__mobile  clother__sorting-btn__mobile--active'
              )
            }
            onClick={HandelClick}>
            {click ? (
              <img src={openMenu} alt="icon-burger" />
            ) : (
              <img src={closeMenu} alt="icon-close" />
            )}
          </div>
          <ul className={click ? 'clother__menu-sorting' : 'clother__menu-sorting--active'}>
            {sort}
          </ul>
        </div>
      </div>

      <ul className="clother__list">
        <Clotheritem itemList={clothers} clotherName={clotherName} />
      </ul>
      <Button buttonLink={clotherName} type="main" />
    </div>
  );
};
