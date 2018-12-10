import Link from 'next/link'
import MobileNav from 'components/MobileNav'
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
				<a className={classnames('nav-link', {active: isActive(props, '/projects')})}>项目</a>
			</Link>
			<Link href="/art">
				<a className={classnames('nav-link', {active: isActive(props, '/art')})}>艺术</a>
			</Link>
			<Link href="/office">
				<a className={classnames('nav-link', {active: isActive(props, '/office')})}>关于</a>
			</Link>
			<Link href="/contact">
				<a className={classnames('nav-link', {active: isActive(props, '/contact')})}>联系我们</a>
			</Link>
		</nav>
		<MobileNav/>
	</header>

export default withRouter(Header)