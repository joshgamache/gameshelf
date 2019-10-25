import React from 'react';

class LoaderButton extends React.Component {

	render() {

		return(
			<button className={this.props.isLoading ? 'button is-loading is-warning' : 'button'} disabled={this.props.disable} onClick={() => this.props.onClick()} title={this.props.disable ? "Can't add a game without dimensions" : "Add the game to your shelf"}>
				<span className="icon is-small">
					<i className={this.props.disable ? "fas fa-times" : "fas fa-plus"}></i>
				</span>
				{this.props.children}
			</button>
		)

	
	}
}

export default LoaderButton;