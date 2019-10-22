import React from 'react'
import {SizeMe} from 'react-sizeme'
import GameShelf from '../components/GameShelf'
import ShelfGrid from '../components/ShelfGridTestingStub'

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
							<div style={{width: "964px", maxWidth: "964px"}}>
									<GameShelf games={this.props.passThru} sizing={this.state.sizing}  />
							</div>
						<hr />
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