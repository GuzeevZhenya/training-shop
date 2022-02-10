import React from 'react';
import InfoBlock from '../../Components/Header/InfoBlock';
import Nav from '../../Components/Nav/Nav';
import { Menu } from '../../Components/Menu/Menu';
import { Delivery } from '../../Components/Delivery/Delivery';
import { Clothers } from '../../Components/Clothers/Clothers';
import { SpecialOffer } from '../../Components/SpecialOffer/SpecialOffer';
import { SpecialBanner } from '../../Components/SpecialBanner/SpecialBanner';
import { Blog } from '../../Components/Blog/Blog';
import { clothersItems } from '../../ClothersBd';

const Main = () => {
  return (
    <div>
      <InfoBlock />
      <div className="container">
        <Menu />
        <Delivery />
        <Clothers itemList={clothersItems} />
        <SpecialOffer />
      </div>
      <SpecialBanner />
      <Blog />
    </div>
  );
};

export default Main;
