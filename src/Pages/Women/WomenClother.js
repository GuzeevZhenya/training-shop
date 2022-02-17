import React from 'react';
import { Clotheritem } from '../../Components/Clothers/ClotherItem/ClotherItem';
import { clothersItems } from '../../ClothersBd';
import ClotherFilter from '../../Components/Clother-filter/Clother-filter';
import './WomenClother.css';

import ClotherFilterLinks from '../../Components/Clother-filter/Clother-filter-links/Clother-filter-links';
import { Button } from '../../Components/Button/Button';


export const Womenclother = ({ itemList,productType }) => {
  return (
    <div className="women__block"  data-test-id={`products-page-${productType}`} >
      <ClotherFilterLinks name={'Women'}/>
      <div className="container">
        <ClotherFilter />
        <ul className="women__items">
          <Clotheritem itemList={clothersItems.women} clotherName={'women'}/>
        </ul>
        <Button type="/women"/>
      </div>
    </div>
  );
};
