import React from 'react';

class LoaderButton extends React.Component {

	render() {
		// const { isLoading } = this.props.isLoading;

		return(
			<button className={this.props.isLoading ? 'button is-loading is-warning' : 'button'} onClick={() => this.props.onClick()}>
				<span className="icon is-small">
					<i className="fas fa-plus"></i>
				</span>
				{this.props.children}
			</button>
		)

	
	}
}

export default LoaderButton;

// const LoaderButton = () =>{
// 	return(
// 		<button key={keyName} className="button" onClick={() => props.onClick(props.games[keyName].id)}>
// 			<span className="icon is-small">
// 				<i className="fas fa-plus"></i>
// 			</span>
// 			<span>{props.games[keyName].name}</span>
// 		</button>)
// 	)

// }