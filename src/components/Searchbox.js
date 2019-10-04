import React from 'react';

const Searchbox = ({ searchField, searchChange, executeSearch}) => {
  return ( 

    <div className="container">
      <div className="columns is-centered">
        <div className="column is-one-third">
          <form className="control field is-grouped is-grouped-centered" id="search-form">
            <input type="text" className="input" id="searchInput" placeholder="Search on BoardGameAtlas" onChange={searchChange} />
            <button className="button is-info" onClick={executeSearch}>Search BGA</button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Searchbox;