import React from 'react';
import {Link} from "react-router-dom";
import { Star } from '../Clothers/ClotherInfo/Star/Star';
 
import './ProductHeader.css'
const MyComponent = () => {
  return (
    <div className="product-header">
      <div className="container">
        <div className="product-header__inner">
          <div className="product-header__item">
            <div className="crumbs">
              <Link className="crumbs__link" to="/">Home</Link>
              <span className="crumbs__arrow"/>
              <Link className="crumbs__link" to="/women">Women</Link>
              <span className="crumbs__arrow"/>
              <span className="crumbs__link crumbs__link--active">Women's tracksuit Q109</span>
            </div>
            <div className="product-header__reviews">
              <Star star="2"/>
              <span className="product-header__desc">2 Reviews</span>
            </div>
          </div>
          <h3 className="product-header__title">Women's tracksuit Q109</h3>
          <div className="product-header__item">
            <button className="categories__share">Share</button>
            <div className="product-header__article">
              <div className="product-header__article-item">
                <span>SKU:</span>
                <span>777</span>
              </div>
              <div className="product-header__article-item">
                <span >Availability:</span>
                <span>In Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;