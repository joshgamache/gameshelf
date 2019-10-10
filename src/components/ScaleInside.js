import React from 'react';

const scaleFactor = (shelfWidth, containerWidth) =>{
	return shelfWidth <= containerWidth ? 1 : containerWidth / shelfWidth
}

const ScaleInside = (props) => {
	
	const insideBlockSize = {
		width: `${props.xW}px`,
		maxWidth: `${props.xW}px`,
		height: `${props.xW}px`,
		maxHeight: `${props.xW}px`,
		display: "block",
 	}
	return (
		<div style={insideBlockSize}>
			{props.children}
		</div>
	)
}

export default ScaleInside;