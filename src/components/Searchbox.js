import React from 'react';

const Searchbox = ({ searchField, searchChange}) => {
  return ( 
    <div className="columns is-centered">
      <div class="column is-one-third">
        <div className="field is-grouped is-grouped-centered">
          <p className="control is-expanded">
            <input className="input" type="search" placeholder="Search games on BoardGameAtlas" onChange={searchChange} />
          </p>
          <p className="control">
            <a className="button is-info">
              Search
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Searchbox;