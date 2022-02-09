import React from 'react';
import './SpecialBanner.css'

export const SpecialBanner = ()=> {
	return (
		<div className='banner'>
			<div className='banner__block'>
				<p>Special Offer</p>
				<h6>Subscribe 
				And Get 10% Off</h6>
				<input placeholder='Enter your email' />
				<button>Subscribe</button>
			</div>
		</div>
	);
}
