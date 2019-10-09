import React from 'react'

const MainColumn = (props) => {
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
			{props.children}
		</div>
	</div>
)
}

export default MainColumn;