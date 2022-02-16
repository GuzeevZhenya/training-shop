import React from 'react';
import InfoBlock from '../../Components/Header/InfoBlock';
import Nav from '../../Components/Nav/Nav';
import { Menu } from '../../Components/Menu/Menu';
import { Delivery } from '../../Components/Delivery/Delivery';
import { Clothers } from '../../Components/Clothers/Clothers';
import { SpecialOffer } from '../../Components/SpecialOffer/SpecialOffer';
import { SpecialBanner } from '../../Components/SpecialBanner/SpecialBanner';
import { Blogs } from '../../Components/Blog/Blogs';
import { clothersItems } from '../../ClothersBd';

const Main = () => {
  return (
    <div>
      <div className="container">
        <Menu />
        <Delivery />
        <Clothers itemList={clothersItems} />
        <SpecialOffer />
      </div>
      <SpecialBanner />
      <Blogs />
    </div>
  );
};

export default Main;
