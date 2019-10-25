import React from "react"
import LoaderButton from "../components/LoaderButton"

const SearchResults = (props) => {
		return(
		<div className="container">
			<h4>Search results</h4>
			<div className="buttons">
				{
					Object.keys(props.games).map((keyName, i) => {
						return(<LoaderButton key={props.games[keyName].id} disable={!props.games[keyName].size_depth} isLoading={props.loadingList.some((element) => element === props.games[keyName].id)} onClick={() => props.onClick(props.games[keyName].id)}>
														<span>{props.games[keyName].name}</span>
                        </LoaderButton>);
					})
				}
			</div>
		</div>
	)
}
// const SearchResults = (props) => {
// 	return(
// 		<div className="container">
// 			<h4>Search results</h4>
// 			<div className="buttons">
// 				{
// 					Object.keys(props.games).map((keyName, i) => {
// 						return(<button key={keyName} className="button" onClick={() => props.onClick(props.games[keyName].id)}>
//                             <span className="icon is-small">
//                                 <i className="fas fa-plus"></i>
//                             </span>
//                             <span>{props.games[keyName].name}</span>
//                         </button>);
// 					})
// 				}
// 			</div>
// 		</div>
// 	)
// }

export default SearchResults;