import React from 'react';
// import refresh from '../../img/Delivery/icons/refresh.svg';
// import car from '../../img/Delivery/icons/car.svg';
// import circle from '../../img/Delivery/icons/circle.svg';

import './Delivery.css';

// const deliveryInfo = [
// 	{ id: 1, title: 'FREE SHIPPING', text: 'On all UA order or order above $100' },
// 	{ id: 2, title: '30 DAYS RETURN', text: 'Simply return it within 30 days for an exchange' },
// 	{ id: 3, title: 'SUPPORT 24/7', text: 'Contact us 24 hours a day, 7 days a week' }
// ];

// const info = deliveryInfo.map(item => (
// 	<div className='delive__block'  key={item.id}>
// 		<div className='delivery__info'>
// 			<h6 className='delivery__title'>{item.title}</h6>
// 			<p className='delivery__text'>{item.text}</p>
// 		</div>

// 	</div>
// ))

export const Delivery = () => {
  return (
    <div className="hero__footer">
      <div className="hero__footer-item hero__footer-item--shipping">
        <h5 className="hero__footer-title">FREE SHIPPING</h5>
        <p className="hero__footer-desc">On all UA order or order above $100</p>
      </div>
      <div className="hero__footer-item hero__footer-item--return">
        <h5 className="hero__footer-title">30 DAYS RETURN</h5>
        <p className="hero__footer-desc">Simply return it within 30 days for an exchange</p>
      </div>
      <div className="hero__footer-item hero__footer-item--support">
        <h5 className="hero__footer-title">SUPPORT 24/7</h5>
        <p className="hero__footer-desc">Contact us 24 hours a day, 7 days a week</p>
      </div>


    </div>
  );
};
