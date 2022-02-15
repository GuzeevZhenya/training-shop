import React from 'react';
import './SpecialOfferItem.css'


export const SpecialOfferItem = ({ id, title, text, image }) => {
 
	return (
		<div className='special__item'> 
			<img src={image} alt="" />
				<div className='special__item-info'>
					<h6 className='special__item-title'>{title}</h6>
					<p className='special__item-text'>{text}</p>	
				</div>	
			</div>
	 
	)
}
