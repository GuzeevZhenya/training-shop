import React, { useState, useEffect } from 'react';
import './Nav.css';
import person from '../../img/Nav/icons/person.svg';
import earth from '../../img/Nav/icons/earth.svg';
import buy from '../../img/Nav/icons/buy.svg';
import loop from '../../img/Nav/icons/loop.svg';
import { NavLink } from 'react-router-dom';
import openMenu from '../../img/icons/Header/open-menu.svg';
import closeMenu from '../../img/icons/Header/close-menu.svg';

const navMenu = [
  { name: 'About Us', link: '/about' },
  { name: 'Women', link: '/women' },
  { name: 'Men', link: '/men' },
  { name: 'Beauty', link: '/beauty' },
  { name: 'Accessories', link: '/accessories' },
  { name: 'Blog', link: '/blog' },
  { name: 'Contact', link: '/contact' },
];

export default function Nav() {
  const [ active, setActive ] = useState(true);
  const [ button, setButton ] = useState(true);

  const menu = navMenu.map((item, index) => (
    <NavLink to={item.link} activeClassName="active-link" className="nav__menu-item" key={index}>
      {item.name}
    </NavLink>
  ));

  const HandelClick = () => {
    setActive(!active);
  };

  const showButton = () => {
    if (window.innerWidth <= 670) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
    <div className="nav">
      <div>
        <NavLink to="/main" className="nav__logo">
          CleverShop
        </NavLink>
      </div>
      <div className="nav__menu">
        <div
          className={
            button ? (
              'navbar__navigation-btn__mobile'
            ) : (
              'navbar__navigation-btn__mobile  navbar__navigation-btn__mobile--active'
            )
          }
          onClick={HandelClick}>
          {active ? (
            <img src={openMenu} alt="icon-burger" />
          ) : (
            <img src={closeMenu} alt="icon-close" />
          )}
        </div>
        <ul className={active ? 'nav__menu-list' : 'nav__menu-list--active'}>{menu}</ul>
      </div>
      <div className="nav__info">
        <img src={loop} alt="loop" />
        <img src={earth} alt="earth" />
        <img src={person} alt="person" />
        <img src={buy} alt="buy" />
      </div>
    </div>
  );
}
