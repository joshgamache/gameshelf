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
		if(this.props.shefW && this.props.shefW.shelfColumns && this.props.shefW.shelfWidth){
			const shelfTotalWidth = (this.props.shefW.shelfWidth + 20) * this.props.shefW.shelfColumns
			scaleThis = scaleFactor(shelfTotalWidth, this.props.xW);
			console.log(`${scaleThis}, ${shelfTotalWidth}, ${this.props.xW}, ${this.props.shefW.shelfColumns}`)
		}

		const insideBlockSize = {
			width: `${this.props.xW}px`,
			maxWidth: `${this.props.xW}px`,
			height: `${this.props.xW}px`,
			maxHeight: `${this.props.xW}px`,
			display: "block",
			transform: `scale(${scaleThis})`
		}

		return (
			<div style={insideBlockSize}>
				<h1>{scaleThis}</h1>
				{this.props.children}
			</div>
		)
	}
}

export default ScaleInside;