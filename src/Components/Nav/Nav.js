import React, { useState, useEffect } from 'react';
import './Nav.css';
import person from '../../img/Nav/icons/person.svg';
import earth from '../../img/Nav/icons/earth.svg';
import buy from '../../img/Nav/icons/buy.svg';
import loop from '../../img/Nav/icons/loop.svg';
import { NavLink } from 'react-router-dom';
import openMenuIcon from '../../img/icons/Header/open-menu.svg';
import closeMenuIcon from '../../img/icons/Header/close-menu.svg';

const navMenu = [
  { id: 1, name: 'About Us', link: 'about' },
  { id: 2, name: 'Women', link: 'women' },
  { id: 3, name: 'Men', link: 'men' },
  { id: 4, name: 'Beauty', link: 'beauty' },
  { id: 5, name: 'Accessories', link: 'accessories' },
  { id: 6, name: 'Blog', link: 'blog' },
  { id: 7, name: 'Contact', link: 'contact' },
];

export default function Nav() {
  const [ active, setActive ] = useState(true);
  const [ button, setButton ] = useState(true);

  const menu = navMenu.map((item, index) => (
    <NavLink to={`/${item.link}`} activeClassName="active-link" className="menu-item" key={item.id}>
      {item.name}
    </NavLink>
  ));

  const HandelClick = (e) => {
    setActive(!active);
  };

  // const closeModal = (e) => {
  //   if (e.target.classList.contains('modal')) {
  //     setOpenItem(null);
  //   }
  // };

  const closeMenu = (e) => {
    if (!e.target.classList.contains('nav__menu-list--active') && !active ) {    
      setActive(!active)
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
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
    <div
      onClick={(e) => closeMenu(e)}
      className={active ? 'nav' : 'nav nav--active'}
      data-text-id="menu">
      <div>
        <NavLink to="/main" className="header-nav-logo" data-test-id="header-logo-link">
          CleverShop
        </NavLink>
      </div>
      <div className="nav__menu">
        <ul className={active ? 'nav__menu-list' : 'nav__menu-list--active'}>{menu}</ul>
      </div>
      <div className="nav__info">
        <img src={loop} alt="loop" />
        <img src={earth} alt="earth" />
        <img src={person} alt="person" />
        <img src={buy} alt="buy" />
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
            <img src={openMenuIcon} alt="icon-burger" />
          ) : (
            <img src={closeMenuIcon} alt="icon-close" />
          )}
        </div>
      </div>
    </div>
  );
}
