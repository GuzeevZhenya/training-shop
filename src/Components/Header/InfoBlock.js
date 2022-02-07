import React from 'react';
import './InfoBlock.css';
import vector from '../../img/icons/Header/Vector.png';
import vector2 from '../../img/icons/Header/Vector (6).svg';
import vector3 from '../../img/icons/Header/Vector (5).svg';
import vector4 from '../../img/icons/Header/Vector (4).svg';
import vector5 from '../../img/icons/Header/Vector (3).svg';
import vector6 from '../../img/icons/Header/Vector (2).svg';
import vector7 from '../../img/icons/Header/Vector (1).svg';

export default function InfoBlock() {
  return (
    <div class="info__block">
      <section className="info__block-section">
        <div className='info__block-about'>
          <div>
            <img src={vector} alt="phone" />
            <span>+375 29 100 20 30</span>
          </div>
          <div>
            <img src={vector2} alt="adress" />
            <span>Belarus, Gomel, Lange 17</span>
          </div>
          <div>
            <img src={vector3} alt="shadule" />
            <span>All week 24/7</span>
          </div>
        </div>
        <div>
          <img src={vector4} alt="facebook" />
          <img src={vector5} alt="twitter" />
          <img src={vector6} alt="instagram" />
          <img src={vector7} alt="shadule" />
        </div>
      </section>
    </div>
  );
}
