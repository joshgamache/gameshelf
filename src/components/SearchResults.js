import React from "react"

const ListStyle = {
	display: "inline",
}

const SearchResults = (props) => {
	return(
		<div className="container">
			<h4>Search results</h4>
			<div className="buttons">
				{
					Object.keys(props.games).map((keyName, i) => {
						return(<button key={keyName} className="button" onClick={() => props.onClick(props.games[keyName].id)}>
                            <span className="icon is-small">
                                <i className="fas fa-plus"></i>
                            </span>
                            <span>{props.games[keyName].name}</span>
                        </button>);
					})
				}
			</div>
		</div>
	)
}

export default SearchResults;