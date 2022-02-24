import React from 'react';
import './ProductRelated.css';
import { Clotheritem } from '../Clothers/ClotherItem/ClotherItem'
import { clothersItems } from '../../ClothersBd';
import { RelatedSlider } from '../Sliders/Sliders';
import { relatedItems } from '../../ClothersBd';

export const ProductRelated = ({data, img}) => {
  return (
    <div className="container">
       <div className="related__list">
          <RelatedSlider itemList={relatedItems}/>
      </div>
    </div>
  );
};

 