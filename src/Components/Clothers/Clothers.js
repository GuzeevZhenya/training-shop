import React from 'react';
import { clothersItems } from './ClothersBd';
import img from '../../img/Clothers/Rectangle 1 (1).jpg'

export const Clothers = () => {
	
	const clothersItem = clothersItems.map(item => (
		<div>
			<img src={item.img}/>
		</div>
	))
	return (
		<div>
			{clothersItem}
		</div>
	)
}
