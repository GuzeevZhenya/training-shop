import React from 'react';
import './ProductSection.css';
import { Clotheritem } from '../Clothers/ClotherItem/ClotherItem'
import { clothersItems } from '../../ClothersBd';

export const ProductSection = ({data, img}) => {
  return (
    <div className="container">
      <div className="related__wrapper">
        <div className="related__head">
          <h3 className="related__title">RELATED PRODUCTS</h3>
          <div className="related__buttons">
            <button className="related__btn related__btn-prev"/>
            <button className="related__btn related__btn-next"/>
          </div>
        </div>

        <div className="related__list">
          <Clotheritem
          itemList={clothersItems.men}
          />
        </div>

      </div>
    </div>
  );
};

 