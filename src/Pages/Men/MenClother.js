import React from 'react';
import { Clotheritem } from '../../Components/Clothers/ClotherItem/ClotherItem';
import { clothersItems } from '../../ClothersBd';
import ClotherFilter from '../../Components/Clother-filter/Clother-filter';
import './MenClother.css';

import ClotherFilterLinks from '../../Components/Clother-filter/Clother-filter-links/Clother-filter-links';
import { Button } from '../../Components/Button/Button';


export const Menclother = ({ itemList }) => {
  return (
    <div className="man__block">
      <ClotherFilterLinks name={'Men'}/>
      <div className="container">
        <ClotherFilter />
        <ul className="men__items">
          <Clotheritem itemList={clothersItems.men} />
        </ul>
        <Button  type="/men"/>
      </div>
    </div>
  );
};
