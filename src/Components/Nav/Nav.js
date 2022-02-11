import React from 'react';
import './Nav.css';

import person from '../../img/Nav/icons/person.svg';
import earth from  '../../img/Nav/icons/earth.svg';
import buy from  '../../img/Nav/icons/buy.svg';
import loop from  '../../img/Nav/icons/loop.svg';

import {NavLink } from 'react-router-dom';

const navMenu =
	[
		{name: 'About Us', link:'/about'},
		{name: 'Women', link:'/women'},
		{name: 'Men', link:'/men'},
		{name: 'Beauty', link:'/beauty'},
		{name: 'Accessories', link:'/accessories'},
		{name: 'Blog', link:'/blog'},
		{name: 'Contact', link:'/contact'}
	]
	;


export default function Nav() {

	const menu = navMenu.map((item,index) => (
		<NavLink to={item.link} activeClassName="active-link" className='nav__menu-item' key={index}>{item.name}</NavLink>
	))

	return (
		<div className='nav'>
			<div>
			<NavLink to='/main' className='nav__logo'>CleverShop</NavLink>
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
