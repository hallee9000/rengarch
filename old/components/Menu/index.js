import React from 'react'
import classnames from 'classnames'
import './menu.less'

export default class Menu extends React.Component {
  constructor (props) {
    super(props)
  }
  handleClick = () => {
    const { onToggle } = this.props
    onToggle && onToggle()
  }
  render () {
    const { visible } = this.props

    return (
      <div
        onClick={this.handleClick}
        className={classnames('menu', {'menu-open': visible})}
      >
        <span className="menu-top"/>
        <span className="menu-middle"/>
        <span className="menu-bottom"/>
      </div>
    )
  }
}
