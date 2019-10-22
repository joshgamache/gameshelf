import React from 'react';

const GridTest = {
	display:"grid",
	// justifyContent:"center",
	overflowX : "auto",
	gridTemplateColumns: `repeat(3, 300px)`,
	gridTemplateRows: `repeat(3, 300px)`,
	gap: "20px 20px",
	background: "white",
	// boxSizing: "border-box",
	// width: "50%",
	// height: "100%",
}

const ShelfGrid = () => {
	return (
		<div style={GridTest}>
			<div bgcolor="blue">Grid goes here.</div>	
			<div>Grid goes here.</div>	
			<div>Grid goes here.</div>	
			<div>Grid goes here.</div>	
			<div>Grid goes here.</div>	
			<div>Grid goes here.</div>	
			<div>Grid goes here.</div>	
			<div>Grid goes here.</div>	
			<div>Grid goes here.</div>	
		</div>
	)
}

export default ShelfGrid;