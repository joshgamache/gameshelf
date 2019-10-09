import React from 'react';

const scaleFactor = (shelfWidth, containerWidth) =>{
	return shelfWidth <= containerWidth ? 1 : containerWidth / shelfWidth
}

const ScaleInside = (props) => {
	return (
		<div>
			{scaleFactor(10, 100)} or {scaleFactor(1000, 100)}
			{props.children}
		</div>
	)
}

export default ScaleInside;