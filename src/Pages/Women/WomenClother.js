import React from 'react';
import { Clotheritem } from '../../Components/Clothers/ClotherItem/ClotherItem';
import { clothersItems } from '../../ClothersBd';
import ClotherFilter from '../../Components/Clother-filter/Clother-filter';
import './WomenClother.css';

export const Womenclother = ({ itemList }) => {
  return (
    <div className="women__block">
      <div className="container">
        <ClotherFilter />
        <ul className="women__items">
          <Clotheritem itemList={clothersItems.women} />
        </ul>
      </div>
    </div>
  );
};
