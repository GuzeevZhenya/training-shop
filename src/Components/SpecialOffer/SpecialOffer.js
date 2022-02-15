import React from 'react';
import season from '../../img/SpecialOffer/Season.jpg';
import sale from '../../img/SpecialOffer/Sale.jpg';
import { SpecialOfferItem } from './SpecialOfferItem/SpecialOfferItem';
import './SpecialOffer.css'

const offerData = [
	{ id: 1, img:season,title:'New Season', text: 'lookbook collection' },
	{ id: 2, img:sale ,title:'Sale', text: 'Get UP to 50% off' },
];


export const SpecialOffer = () => {

	const offerItem = offerData.map(item => (
		<>
			<SpecialOfferItem id={item.id} image={item.img} title={item.title} text={item.text}/>
		</>

	))

	return (
		<div className='special__offer-items'>
		 {offerItem}
	 	</div>
	);
}

 
