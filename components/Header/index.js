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
				<img src="/logo.png"/>
			</a>
		</Link>
		<span className="header-stretch"/>
		<nav className="header-nav">
			<Link href="/projects">
				<a className={classnames('nav-link', {active: isActive(props, '/projects')})}><span>项目</span><br/>Projects</a>
			</Link>
			<Link href="/art">
				<a className={classnames('nav-link', {active: isActive(props, '/art')})}><span>艺术</span><br/>Art</a>
			</Link>
			<Link href="/office">
				<a className={classnames('nav-link', {active: isActive(props, '/office')})}><span>关于</span><br/>Office</a>
			</Link>
			<Link href="/contact">
				<a className={classnames('nav-link', {active: isActive(props, '/contact')})}><span>联系我们</span><br/>Contact</a>
			</Link>
		</nav>
		<MobileNav/>
	</header>

export default withRouter(Header)