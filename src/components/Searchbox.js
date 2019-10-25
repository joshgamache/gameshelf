import React from 'react';

const Searchbox = ({ searchField, searchChange, executeSearch}) => {
  return ( 
  <div>  
    <form className="control" id="search-form">
      <label className="label is-small">Search on BoardGameAtlas for games to add</label>
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" id="searchInput" placeholder="e.g Scythe" onChange={searchChange}/>
          <p class="help">Leave blank and search to see popular games</p>
        </div>
        <div className="control">
          <button className="button is-info" onClick={executeSearch}>Search</button>
        </div>
      </div>
    </form>
  </div>
  );
}

export default Searchbox;