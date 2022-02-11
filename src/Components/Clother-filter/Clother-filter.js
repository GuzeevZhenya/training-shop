import React from 'react';
import './Clother-filter.css';

const ClotherFilter = ({ name }) => {
  return (
    <div className='filter'>
     
      <div className="filter__buttons">
        <div className="filter__icons">
          <input type="button" className="filter__category"/>
          <p className='filter__icons-text'>Filter</p>
        </div>
        <div className="filter__locations">
          <input type="button" className='filter__extra'/>
          <input className='filter__location' />
        </div>
      </div>
    </div>
  );
};

export default ClotherFilter;
