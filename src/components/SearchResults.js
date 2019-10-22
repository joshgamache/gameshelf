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
						return(<button key={keyName} className="button is-fullwidth" onClick={() => props.onClick(props.games[keyName].id)}>{props.games[keyName].name}</button>);
					})
				}
			</div>
		</div>
	)
}

// class stubList extends React.Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           {
//             Object.keys(this.props.games).map((keyName, i) => {
//               return(<li key={keyName} style={{display: "inline"}}><button onClick={() => this.props.onClick(this.props.games[keyName].id)} className="button">{this.props.games[keyName].name}</button></li>);
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// }

export default SearchResults;