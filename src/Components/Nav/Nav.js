import React from 'react';
import './Nav.css';

import person from '../../img/Nav/icons/person.svg';
import earth from  '../../img/Nav/icons/earth.svg';
import buy from  '../../img/Nav/icons/buy.svg';
import loop from  '../../img/Nav/icons/loop.svg';

const navMenu = ['About Us', 'Women', 'Men', 'Beauty', 'Accessories', 'Blog', 'Contact'];


export default function Nav() {

	const menu = navMenu.map((item,index) => (
		<li className='nav__menu-item' key={index}>{item}</li>
	))

	return (
		<div className='nav'>
		 
			<div>
			<p className='nav__logo'>CleverShop</p>
		</div>
		<div className='nav__menu'>
			<ul className='nav__menu-list'>
				{menu}
			</ul>
		</div>
		<div className='nav__info'>
			<img src={loop} alt='loop'/>
			<img src={earth} alt='earth'/>
			<img src={person} alt='person'/>
			<img src={buy} alt='buy'/>
		
		 
			</div>
		</div>
	)
}
