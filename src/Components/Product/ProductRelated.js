import React from 'react';

import main from '../../img/Product/Main.png';
import './ProductRelated.css';
import { NavLink } from 'react-router-dom';
import { Star } from '../Clothers/ClotherInfo/Star/Star';
import { ProductSection } from './ProductSection';

import small1 from '../../img/Product/smallvers1.png';
import small2 from '../../img/Product/smallvers2.png';
import small3 from '../../img/Product/smallvers3.png';
import small4 from '../../img/Product/smallvers4.png';

import color1 from '../../img/Product/color1.png';
import color2 from '../../img/Product/color2.png';
import color3 from '../../img/Product/color3.png';
import color4 from '../../img/Product/color4.png';

import label1 from '../../img/Footer/Stripe.png';
import label2 from '../../img/Footer/AES256.png';
import label3 from '../../img/Footer/paypal.png';
import label4 from '../../img/Footer/visa.png';
import label5 from '../../img/Footer/mastercard.png';
import label6 from '../../img/Footer/discover.png';
import label7 from '../../img/Footer/american.png';
import { Productselect } from './ProductSelect';

const labels = [
  {
    path: '/',
    img: label1,
  },
  {
    path: '/',
    img: label2,
  },
  {
    path: '/',
    img: label3,
  },
  {
    path: '/',
    img: label4,
  },
  {
    path: '/',
    img: label5,
  },
  {
    path: '/',
    img: label6,
  },
  {
    path: '/',
    img: label7,
  },
];

const productDb = {
  small: [ small1, small2, small3, small4 ],
  color: [
    {
      id: 1,
      img: color1,
      color: 'blue',
    },
    {
      id: 2,
      img: color2,
      color: 'red',
    },
    {
      id: 3,
      img: color3,
      color: 'black',
    },
    {
      id: 4,
      img: color4,
      color: 'white',
    },
  ],
  size: [ 'XS', 'S', 'M', 'L' ],
};

export const ProductRelated = () => {
  const smallImage = productDb.small.map((item) => (
    <img className="product__smallImage" src={item} alt={item} />
  ));
  const colorImage = productDb.color.map((item) => (
    <img className="product__size" src={item.img} alt={item} />
  ));
  const sizeType = productDb.size.map((item) => <span>{item}</span>);
  const pay = labels.map((label, index) => (
    <NavLink key={`label${index}`} to={labels[index].path}>
      <img src={labels[index].img} alt="icon" />
    </NavLink>
  ));

  return (
    
    // <div className="container">
      <div className="product__block">
        <div className="product__block-smallimage">{smallImage}</div>
        <div className="product__block-main">
          <img src={main} />
        </div>
        <Productselect />
      </div>
    // </div>

    // <div className="product__block">
    //   <div className="product__block-smallimage">{smallImage}</div>
    //   <div className="">
    //     <img src={main} />
    //   </div>
    //   <div>
    //     <div className="product__color">
    //       Color:<span>blue</span>
    //     </div>
    //     {colorImage}
    //     <div className="product__size">
    //       Size:<span>S</span>
    //     </div>
    //     <div>
    //       {sizeType}
    //       <p>Size guide</p>
    //     </div>
    //     <div>
    //       <span>$ 379.99</span>
    //       <button>Add to Card</button>
    //       <span>heart</span>
    //       <span>весы</span>
    //     </div>
    //     <div>
    //       <span>Shipping & Delivery</span>
    //       <span>Returns & Exchanges</span>
    //       <span>Ask a question</span>
    //     </div>
    //     <div>guaranteed safe checkout</div>
    //     <div>{pay}</div>
    //     <div>
    //       <h6>DESCRIPTION</h6>
    //     </div>
    //     <div>
    //       <h6>ADDITIONAL INFORMATION</h6>
    //       <p>
    //         Color:<span>Blue, White, Black, Grey</span>
    //       </p>
    //       <p>
    //         Size:<span>XS, S, M, L</span>
    //       </p>
    //       <p>
    //         Material:<span> 100% Polyester</span>
    //       </p>
    //     </div>
    //     <div>
    //       <h6>REVIEWS</h6>
    //       <div>
    //         <div>
    //           <Star star="2" />
    //           <span className="product-header__desc">2 Reviews</span>
    //         </div>
    //         <div>
    //           <p>Write a review</p>
    //         </div>
    //       </div>
    //       <div>
    //         <div>
    //           <div>
    //             <h5>Oleh Chabanov</h5>
    //             <Star star="5" />
    //           </div>

    //           <p>
    //             On the other hand, we denounce with righteous indignation and
    //             like men who are so beguiled and demoralized by the charms of
    //             pleasure of the moment
    //           </p>
    //           <div>
    //             <h5>ShAmAn design</h5>
    //             <Star star="4" />
    //           </div>
    //           <p>
    //           At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
