import React from 'react'
import GameShelf from '../components/GameShelf'

class MainColumn extends React.Component{
	constructor(props) {
		super(props);
        this.state = {
            sizing : {
                shelfWidth : 330,
                shelfHeight : 330,
                shelfColumns : 2,
                shelfRows : 2,
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
							<div style={{width: "100%", maxWidth: "964px"}}>
									<GameShelf games={this.props.passThru} removeFromLoading={this.props.removeFromLoading} sizing={this.state.sizing} style={{margin: "0 auto"}} />
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