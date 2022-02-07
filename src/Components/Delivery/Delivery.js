import React from 'react';
import refresh from '../../img/Delivery/icons/refresh.svg';
import car from '../../img/Delivery/icons/car.svg';
import circle from '../../img/Delivery/icons/circle.svg';

import './Delivery.css'

const deliveryInfo = [
	{ id: 1, title: 'FREE SHIPPING', img:refresh , text: 'On all UA order or order above $100' },
	{ id: 2, title: '30 DAYS RETURN', img:circle , text: 'Simply return it within 30 days for an exchange' },
	{ id: 3, title: 'SUPPORT 24/7', img: car , text: 'Contact us 24 hours a day, 7 days a week' }
];

const info = deliveryInfo.map(item => (
	<div className='delive__block'  key={item.id}>
		<img className='delivery__img' src={item.img} />
		<div className='delivery__info'>
			<h6 className='delivery__title'>{item.title}</h6>
			<p className='delivery__text'>{item.text}</p>
		</div>
	
	</div>
))

export const Delivery = () => {
	return (
		<div className='delivery'>
			{info}
		</div>
	);
}

 
