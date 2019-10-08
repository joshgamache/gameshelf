import React from "react"

const Header = () => {
	return (

	<header className="hero is-small is-primary is-bold">
		<div className="hero-head">
			<nav className="navbar">
				<div className="navbar-menu">
					<div className="navbar-end">
						<a href="#" className="navbar-item">Reset</a>
						<span className="navbar-item">
							<a href="http://www.github.com/Infiniwild/gameshelf" className="button is-primary is-inverted">
								<span className="icon">
									<i className="fab fa-github"></i>
								</span>
								<span>View project code</span>
							</a>
						</span>
					</div>
				</div>
			</nav>
		</div>
		<div className="hero-body">
			<div className="container">
				<h1 className="title">Board with your shelf</h1>
				<h2 className="subtitle">A board game shelf visualizer by <strong><a href="http://www.jgamache.ca">Josh Gamache</a></strong></h2>
			</div>
		</div>
	</header>

	);
}

export default Header;