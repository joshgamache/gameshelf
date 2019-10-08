import React from 'react'

const MainColumn = () => {
	return (
		<div className="column is-three-quarter">
		<div className="message">
			<a href="#">
				<div className="message-header">
					<p>Shelf</p>
					<span className="icon is-small">
						<i className="fas fa-angle-down" aria-hidden="true"></i>
					</span>
				</div>
			</a>
			<div className="message-body">
			</div>
		</div>
		<div>
			<div className="columns">
				<div className="box">List of selected games goes here</div>
			</div>
		</div>
	</div>
)
}

export default MainColumn;