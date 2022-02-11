import React from 'react';

const ClotherFilterLinks = ({name}) => {
  return (
    <div className='filter__block'>
      <div className="filter__links">
        <div className="filter__links-pages">
          <a href="#" className="filter__link">
            Home
          </a>
          <a href="#" className="filter__link filter__link--active">
            {name}
          </a>
        </div>
        <div className="filter__links-share">
          <a>Share</a>
        </div>
      </div>
      <div className="filter__name">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default ClotherFilterLinks;
