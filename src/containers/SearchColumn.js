import React from 'react'

const SearchColumn = (props) => {
	
	return (
		<div className="column is-one-quarter-desktop is-full-mobile">
			{props.children}
		</div>
)
}

export default SearchColumn;