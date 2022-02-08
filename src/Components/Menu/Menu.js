import React from 'react';
import banner from '../../img/Menu/Banner.jpg'; 
import './Menu.css';

export const Menu = () => {
  return (
		<div className='menu'>
			<div className='menu__slider'>
				<img src={banner} />
				<div className='menu__text slider__block'>
				 <p className='menu__text-small'>Banner</p>
				 <p className='menu__text-big'>You Title Text</p>
				</div>
			</div>
			<div className='menu__items'>
				<div className='menu__item-small small__items'>
					<div className='small__item small__item-women'>
						<button className='menu__text'>Women</button>						
					</div>
					<div className='small__item small__item-men'>
						<button className='menu__text'>Men</button>						
					</div>
				</div>
				<div className='menu__item-big'>
						<button className='menu__text'>Accessories</button>
				</div>
			</div>
		</div>
  );
};