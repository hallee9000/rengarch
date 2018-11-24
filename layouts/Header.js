import Link from 'next/link'
import { withRouter } from 'next/router'
import { isActive } from 'utils/url'
import classnames from 'classnames'
import "./header.less"

const Header = props => 
	<header className="header container">
		<Link href="/">
			<a className="header-logo">
				<img src="/static/logo.png"/>
			</a>
		</Link>
		<span className="header-stretch"/>
		<nav className="header-nav">
			<Link href="/projects">
				<a className={classnames('nav-link', {active: isActive(props, '/projects')})}>Projects</a>
			</Link>
			<Link href="/office">
				<a className={classnames('nav-link', {active: isActive(props, '/office')})}>Office</a>
			</Link>
			<Link href="/art">
				<a className={classnames('nav-link', {active: isActive(props, '/art')})}>Art</a>
			</Link>
			<Link href="/contact">
				<a className={classnames('nav-link', {active: isActive(props, '/contact')})}>Contact</a>
			</Link>
		</nav>
		<div className="header-mobile">
			≡
		</div>
	</header>

export default withRouter(Header)