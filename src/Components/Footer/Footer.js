import React from 'react';
import './Footer.css';
 
import {Link} from "react-router-dom";
// import label1 from '../../img/icons/label1.png';
// import label2 from '../../img/icons/label2.png';
// import label3 from '../../img/icons/label3.png';
// import label4 from '../../img/icons/label4.png';
// import label5 from '../../img/icons/label5.png';
// import label6 from '../../img/icons/label6.png';
// import label7 from '../../img/icons/label7.png';

// const labels = [
//   {
//     path: '/',
//     img: label1
//   },
//   {
//     path: '/',
//     img: label2
//   },
//   {
//     path: '/',
//     img: label3
//   },
//   {
//     path: '/',
//     img: label4
//   },
//   {
//     path: '/',
//     img: label5
//   },
//   {
//     path: '/',
//     img: label6
//   },
//   {
//     path: '/',
//     img: label7
//   }
// ];
export const Footer = () => {
  return (<footer className="footer">
    <div className="footer__top">
      <div className="footer__top-inner">
        <form action="" className="footer__form">
          <label htmlFor="" className="footer__label">BE IN TOUCH WITH US:</label>
          <input type="text" className="footer__input" placeholder="Enter your email"/>
          <button className="footer__btn" type="submit">Join Us</button>
        </form>
        
      </div>

    </div>
    <div className="footer__body">
      <div className="footer-section">
        <h3 className="footer__title">
          Categories
        </h3>
        <ul className="footer__list">
          <li className="footer__item">
            <Link to="/">Men
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/">Women
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/">Accessories
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/">Beauty
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer__title">
          Infomation
        </h3>
        <ul className="footer__list">
          <li className="footer__item">
            <Link to="/">About Us

            </Link>
          </li>
          <li className="footer__item">
            <Link to="/">Contact Us
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/">Blog
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/">FAQs
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer__title">
          Useful links
        </h3>
        <ul className="footer__list">
          <li className="footer__item">
            <Link to="/">Terms & Conditions
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/">Returns & Exchanges
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/">Shipping & Delivery
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/">Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer__title">
          CONTACT US
        </h3>
        <ul className="footer__list">
          <li className="footer__item footer__item--location">
              <span>
              Belarus, Gomel, Lange 17
            </span>

          </li>
          <li className="footer__item footer__item--phone">
            <a href="tel:+375 29 100 20 30">+375 29 100 20 30
            </a>
          </li>
          <li className="footer__item footer__item--time">
              <span>
               All week 24/7
            </span>
          </li>
          <li className="footer__item footer__item--mail">
            <a href="mailto:info@clevertec.ru">info@clevertec.ru
            </a>
          </li>
        </ul>
      </div>

    </div>
    <div className="footer__bottom">
      <div className="footer__bottom-inner">
        <p className="footer__copy">Copyright © 2032 all rights reserved</p>
       
        <Link className="footer__clevertec" to="/">Clevertec.ru/training</Link>
      </div>
    </div>
  </footer>);
};

 