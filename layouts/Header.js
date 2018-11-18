import "../assets/base.less"
import "./header.less"
export default props => 
	<header className="header">
		<nav className="header-nav">
			<a className="nav-link nav-logo">
				<img src="/static/logo.png"/>
			</a>
			<span className="nav-stretch"/>
			<a className="nav-link">Projects</a>
			<a className="nav-link">Office</a>
			<a className="nav-link">Art</a>
			<a className="nav-link">Contact</a>
		</nav>
	</header>