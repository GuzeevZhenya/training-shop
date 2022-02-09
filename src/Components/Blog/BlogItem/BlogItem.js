import React from 'react';
import './BlogItem.css'

export const Blogitem = ({title,id,image,text}) => {
	return (
		<>
			<div key={id} className='blog__item' style={{ backgroundImage: `url(${image})` }}>
				<div className='blog__info'>
					<h6 className='blog__info-title'>{title}</h6>
					<p className='blog__info-text'>{text}</p>
				</div>
			</div>
		</>
	);
}

 
