import React from 'react';
import vector4 from '../../img/icons/Header/Vector (4).svg';
import vector5 from '../../img/icons/Header/Vector (3).svg';
import vector6 from '../../img/icons/Header/Vector (2).svg';
import vector7 from '../../img/icons/Header/Vector (1).svg';

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

 
