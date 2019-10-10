import React from 'react';

const scaleFactor = (shelfWidth = 330, containerWidth = 330) =>{
	return shelfWidth <= containerWidth ? 1 : containerWidth / shelfWidth
}

class ScaleInside extends React.Component {

	constructor(props) {
    super(props);
    this.state = {...this.props.shefW};
  }

	render() {

		let scaleThis = 1;
		if(this.state.shefW && this.state.shefW.shelfColumns && this.state.shefW.shelfWidth){
			const shelfTotalWidth = (this.state.shefW.shelfWidth + 20) * this.state.shefW.shelfColumns
			scaleThis = scaleFactor(shelfTotalWidth, this.state.xW);
			console.log(`${scaleThis}, ${shelfTotalWidth}, ${this.state.xW}, ${this.state.shefW.shelfColumns}`)
		}

		const insideBlockSize = {
			width: `${this.state.xW}px`,
			maxWidth: `${this.state.xW}px`,
			height: `${this.state.xW}px`,
			maxHeight: `${this.state.xW}px`,
			display: "block",
			transform: `scale(${scaleThis})`
		}

		return (
			<div style={insideBlockSize}>
				<h1>{scaleThis}</h1>	
				{this.state.children}
			</div>
		)
	}
}

export default ScaleInside;