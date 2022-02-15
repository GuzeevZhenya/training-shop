import React from 'react';
import vector4 from '../../img/icons/Header/facebook.svg';
import vector5 from '../../img/icons/Header/twitter.svg';
import vector6 from '../../img/icons/Header/insta.svg';
import vector7 from '../../img/icons/Header/pa.svg';

import './SocialIcons.css'

export const Socialicons = () => {
  return (
    <div className='socialicons'>
      <img src={vector4} alt="facebook" />
      <img src={vector5} alt="twitter" />
      <img src={vector6} alt="instagram" />
      <img src={vector7} alt="shadule" />
    </div>
  );
};

 
