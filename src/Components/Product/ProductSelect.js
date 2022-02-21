import React,{useState} from 'react';
import { Star } from '../Clothers/ClotherInfo/Star/Star';
import {Link } from 'react-router-dom';
import './ProductSelect.css';


import color1 from "../../img/Product/color1.png";
import color2 from "../../img/Product/color2.png";
import color3 from "../../img/Product/color3.png";
import color4 from "../../img/Product/color4.png";

import icon1 from '../../img/Product/discover.svg';
import icon2 from '../../img/Product/AES256.svg';
import icon3 from '../../img/Product/paypal.svg';
import icon4 from '../../img/Product/visa.svg';
import icon5 from '../../img/Product/mastercard.svg';
import icon6 from '../../img/Product/discover.svg';
import icon7 from '../../img/Product/american-express.svg';

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];

export const Productselect = () => {
		const [colors, setColors] = useState(1);
		const [sizes, setSizes] = useState(1);
		const addActiveColor = (index) => {
			setColors(index)
		}
		const addActiveSize = (index) => {
			setSizes(index)
		}
	
		return (
			<div className="product-select__wrapper">
				<div className="product-select__item item__color">
					<div className="product-select__head">
						<span className="product-select__label">Color:</span>
						<span className="product-select__value">Blue</span>
					</div>
					<div className="product-select__list list__color">
						<span
							className={(colors===1)
								? "product-select__elem product-active"
								: "product-select__elem"}
							onClick={()=>addActiveColor(1)}
						>
							<img src={color1} alt="product"/>
						</span>
						<span className={(colors===2)
							? "product-select__elem product-active"
							: "product-select__elem"}
									onClick={()=>addActiveColor(2)}
						>
							<img src={color2} alt="product"/>
						</span>
						<span className={(colors===3)
							? "product-select__elem product-active"
							: "product-select__elem"}
									onClick={()=>addActiveColor(3)}
						>
							<img src={color3} alt="product"/>
						</span>
						<span className={(colors===4)
							? "product-select__elem product-active"
							: "product-select__elem"}
									onClick={()=>addActiveColor(4)}
						>
							<img src={color4} alt="product"/>
						</span>
					</div>
				</div>
				<div className="product-select__item item__size">
					<div className="product-select__head">
						<span className="product-select__label">Size:</span>
						<span className="product-select__value">S</span>
					</div>
					<div className="product-select__list list__size">
	
						<span className={(sizes===1)
							? "product-select__elem product-active"
							: "product-select__elem"}
									onClick={()=>addActiveSize(1)}>
							XS
						</span>
						<span className={(sizes===2)
							? "product-select__elem product-active"
							: "product-select__elem"}
									onClick={()=>addActiveSize(2)}>
							S
						</span>
						<span className={(sizes===3)
							? "product-select__elem product-active"
							: "product-select__elem"}
									onClick={()=>addActiveSize(3)}>
							M
						</span>
						<span className={(sizes===4)
							? "product-select__elem product-active"
							: "product-select__elem"}
									onClick={()=>addActiveSize(4)}>
							L
						</span>
	
					</div>
					<button className="product-select__btn">Size guide</button>
				</div>
				<div className="product-select__item item__card">
	
					<div className="product-select__list list__card">
						<span className="product-select__elem elem__price">
							$ 379.99
						</span>
						<button className="product-select__button">
							add to card
						</button>
						<Link to="/" className="product-select__link elem__favorites"/>
						<Link to="/" className="product-select__link elem__compare"/>
					</div>
				</div>
				<div className="product-select__item item__info">
	
					<div className="product-select__list list__info">
						<span className="list__info-elem elem__shipping">
							Shipping & Delivery
						</span>
						<span className="list__info-elem elem__return">
							Returns & Exchanges
						</span>
						<span className="list__info-elem elem__questions">
							Ask a questions
						</span>
	
					</div>
					<div className="product-select__checkout">
						<div className="product-select__checkout-head">
							<h5 className="product-select__checkout-title">
								guaranteed safe checkout
							</h5>
							<div className="product-select__checkout-line"/>
						</div>
	
						<div className="product-select__checkout-list">
							{
								icons.map((icon, index) =>
									<Link to="/"
												key={`brand${index}`}>
										<img
											src={icon}
											alt={`icon${index}`}
										/>
									</Link>
								)
							}
						</div>
					</div>
				</div>
				<div className="product-select__item item__desc">
					<div className="product-select__head">
						<span className="product-select__label">DESCRIPTION</span>
					</div>
				</div>
				<div className="product-select__item item__information">
					<div className="product-select__head">
						<span className="product-select__label">ADDITIONAL INFORMATION</span>
					</div>
					<div className="product-select__list list__information">
						<div className="product-select__list-item">
							<span>Color: </span><span>Blue,</span><span>White,</span><span>Black,</span><span>Grey</span>
						</div>
						<div className="product-select__list-item">
							<span>Size: </span><span>XS,</span><span>S,</span><span>M,</span><span>L</span>
						</div>
						<div className="product-select__list-item">
							<span>Material: </span><span>100% Polyester</span>
						</div>
					</div>
				</div>
				<div className="product-select__item item__review">
					<div className="product-select__head">
						<span className="product-select__label">review</span>
					</div>
					<div className="product-select__review">
						<div className="product-select__rating-inner">
							<form action="" className="form__rating">
								<div className="rating">
									<div className="rating__items">
										<input id="star_5" className="rating__item" type="radio" value="5" name="star"/>
										<label htmlFor="star_5" className="rating__label"/>
										<input id="star_4" className="rating__item" type="radio" value="4" name="star"/>
										<label htmlFor="star_4" className="rating__label"/>
										<input id="star_3" className="rating__item" type="radio" value="3" name="star"/>
										<label htmlFor="star_3" className="rating__label"/>
										<input id="star_2" className="rating__item" type="radio" value="2" name="star"/>
										<label htmlFor="star_2" className="rating__label"/>
										<input id="star_1" className="rating__item" type="radio" value="1" name="star"/>
										<label htmlFor="star_1" className="rating__label"/>
									</div>
								</div>
							</form>
							<span className="product-select__rating-review">2 Reviews</span>
	
	
						</div>
						<button className="product-select__rating-btn">Write a review</button>
	
					</div>
					<div className="product-select__list list__review">
	
						<div className="list__review-item">
							<div className="list__review-head">
								<h6 className="list__review-name">Oleh Chabanov</h6>
								<div className="list__review-rating">
									<span className="list__review-date">3 months ago</span>
									<Star star="4"/>
								</div>
	
							</div>
							<p className="list__review-text">On the other hand, we denounce with righteous indignation and like men
								who are so beguiled and demoralized by the charms of pleasure of the moment</p>
	
						</div>
						<div className="list__review-item">
							<div className="list__review-head">
								<h6 className="list__review-name">ShAmAn design</h6>
								<div className="list__review-rating">
									<span className="list__review-date">3 months ago</span>
									<Star star="4"/>
								</div>
	
							</div>
							<p className="list__review-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
								praesentium voluptatum deleniti</p>
	
						</div>
	
	
					</div>
				</div>
			</div>
		);
}

 
