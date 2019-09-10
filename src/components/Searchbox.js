import React from 'react';

const Searchbox = ({ searchField, searchChange}) => {
  return ( 
    <div>
      <input type="search" placeholder="search games" onChange={searchChange} />
    </div>
  );
}

export default Searchbox;