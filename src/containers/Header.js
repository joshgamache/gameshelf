import React from "react"
import headImage from '../assets/christopher-paul-high-Ky-yCucr8cY-unsplash.jpg'

const refreshPage = () => window.location.reload();


const Header = () => {
	return (

	<header className="hero is-dark is-bold has-background">
	<img className="hero-background is-transparent" src={headImage} alt="Header of a board game scene" />
		<div className="hero-head">
			<div className="container">
				<nav className="navbar">
					<div className="navbar-menu is-active">
						<div className="navbar-end">
							<a role="button" className="navbar-item" aria-label="refresh page" onClick={() => refreshPage()}>Reset</a>
							<span className="navbar-item">
								<a href="http://www.github.com/joshgamache/gameshelf" className="button is-dark is-inverted">
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
		</div>
		<div className="hero-body">
			<div className="container">
				<h1 className="title">Get your shelf together!</h1>
				<h2 className="subtitle">A board game shelf visualizer by <strong><a href="http://www.jgamache.ca">Josh Gamache</a></strong></h2>
			</div>
		</div>
	</header>

	);
}

export default Header;
