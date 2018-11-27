import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import classnames from 'classnames'
import Menu from 'components/Menu'
import { isActive } from 'utils/url'
import "./mobileNav.less"

class MobileNav extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			isOpen: false
		}
	}
	handleToggle = () => {
		const { isOpen } = this.state
		this.setState({ isOpen: !isOpen })
	}
	render () {
		const { isOpen } = this.state
		return (
			<header className="header-mobile">
				<Menu onToggle={this.handleToggle} visible={isOpen}/>
				<nav className={classnames('mobile-nav', {'mobile-nav-open': isOpen})} onClick={this.handleToggle}>
					<Link href="/projects">
						<a className={classnames('nav-link', {active: isActive(this.props, '/projects')})}>Projects</a>
					</Link>
					<Link href="/office">
						<a className={classnames('nav-link', {active: isActive(this.props, '/office')})}>Office</a>
					</Link>
					<Link href="/art">
						<a className={classnames('nav-link', {active: isActive(this.props, '/art')})}>Art</a>
					</Link>
					<Link href="/contact">
						<a className={classnames('nav-link', {active: isActive(this.props, '/contact')})}>Contact</a>
					</Link>
				</nav>
			</header>
		)
	}
}

export default withRouter(MobileNav)