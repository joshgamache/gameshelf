import React from 'react'

const SearchColumn = (props) => {
	
	return (
		<div className="column is-one-quarter">
			<p>test text here</p>
			{props.childComponent}
		</div>
)
}


// const SearchColumn = () => {
// 	return (
// 		<div className="column is-one-quarter">
// 			<label className="label is-normal">Search BGA for games to add</label>
// 			<div className="field has-addons">
// 				<div className="control">
// 					<input className="input" type="text" placeholder="e.g Scythe"/>
// 				</div>
// 				<div className="control">
// 					<a className="button is-info">
// 						Search
// 					</a>
// 				</div>
// 			</div>
// 			<div className="box">
// 				Search results here.
// 			</div>
// 		</div>
// )
// }

// {searchResults != "" &&
// <div className="box">
// 	<h4>Search results</h4>
// 	<StubList games={searchResults} onClick={(gameKeyId) => this.toAddFromSearchClick(gameKeyId)} />
// 	{/* <GameList games={searchResults} /> */}
// </div>
// }


export default SearchColumn;