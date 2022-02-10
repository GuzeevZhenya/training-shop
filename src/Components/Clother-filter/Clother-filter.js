import React from 'react';
import './Clother-filter.css';

const ClotherFilter = ({ name }) => {
  return (
    <div>
      <div className="filter__links">
        <div className="filter__links-pages">
          <a href='#' className='filter__link'>Home</a>
          <a href='#' className='filter__link filter__link--active'>Women</a>
        </div>
        <div className="filter__links-share">
          <a>Share</a>
        </div>
      </div>
      <div className="filter__name">
        <h1>Women</h1>
      </div>
      <div className="filter__buttons">
        <div className="filter__category">
          <button>Click</button>
          <p>Filter</p>
        </div>
        <div className="filter__locations">
          <button />
          <button />
        </div>
      </div>
    </div>
  );
};

export default ClotherFilter;
