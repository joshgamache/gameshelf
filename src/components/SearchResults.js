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

export default SearchResults;