import "../assets/base.less"
import "./header.less"
export default props => 
	<header className="header container">
		<nav className="header-nav">
			<a className="nav-link nav-logo">
				<img src="/static/logo.png"/>
			</a>
			<span className="nav-stretch"/>
			<a className="nav-link" href="/projects">Projects</a>
			<a className="nav-link" href="/office">Office</a>
			<a className="nav-link" href="/art">Art</a>
			<a className="nav-link" href="/contact">Contact</a>
		</nav>
	</header>