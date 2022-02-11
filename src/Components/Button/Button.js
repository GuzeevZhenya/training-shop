import React from 'react'
import './Button.css';
import { NavLink } from 'react-router-dom';

export const Button = ({type,buttonLink})=> {

	const mainClother = (
		<NavLink to={`${buttonLink}`} className='main__btn'>See All</NavLink>
	)

	const personClother = (
		<button className='person__btn'></button>
	) 

	return (
		<div className='clother__button'>
			{type === 'main' ? mainClother : personClother}
		</div>
	)
}
