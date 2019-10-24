import React from "react";

class GameboxInShelfBay extends React.Component {
	componentDidMount() {
		this.props.removeFromLoading()
	}

	render(){
		return(
			<li 
				className="individual-board-game-box" 
				style={{ 
					width: this.props.shape[0], 
					height: this.props.shape[1], 
					background: this.props.colorSet.backgroundColor, 
					borderWidth: "1px", 
					borderStyle: "solid", 
					borderColor: this.props.colorSet.alternativeColor}}>
				<span 
					style={{color: this.props.colorSet.color}} 
					className="gameBoxName title is-4">
					{this.props.children}
				</span>
			</li> 
		)
	}
}

export default GameboxInShelfBay;