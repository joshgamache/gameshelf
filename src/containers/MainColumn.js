import React from 'react'
import {SizeMe} from 'react-sizeme'
import GameShelf from '../components/GameShelf'

class MainColumn extends React.Component{
	constructor(props) {
		super(props);
        this.state = {
            sizing : {
                shelfWidth : 330,
                shelfHeight : 330,
                shelfColumns : 1,
                shelfRows : 1,
            },
		};
	}

	render() {
		return (
			<div className="column is-three-quarter">
				<div className="message">
					{/* <a href="#"> */}
						<div className="message-header">
							<p>Shelf</p>
							<span className="icon is-small">
								<i className="fas fa-angle-down" aria-hidden="true"></i>
							</span>
						</div>
					{/* </a> */}
					<div className="message-body">
						Size of this box will be the 100% of the shelf.
						Send SizeMe data down into a component and use that as a scale factor. The width of the shelf will be 100%, unless it is larger than the box. If it is, the shelf will scale down proportionately (and show the scale factor as a decimal). Use a parent/child component to handle the scaling.
						<SizeMe>{
							({ size }) => (
								<div maxHeight={`${size.width}px`}>
										<GameShelf games={this.props.passThru} sizing={this.state.sizing} sizeMeSize={size.width}/>
								</div>
							)}
						</SizeMe>
					</div>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default MainColumn;