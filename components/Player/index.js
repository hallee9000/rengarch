import React, { createRef } from 'react'
import classnames from 'classnames'
import './style.less'

export default class Player extends React.Component {
  constructor (props) {
    super(props)
    this.player = createRef()
    this.state = {
      isPlaying: false
    }
  }
  handleClick = () => {
    const { isPlaying } = this.state
    const player =  this.player.current
    player.muted = false
    isPlaying ? player.pause() : player.play()
    this.setState({isPlaying: !isPlaying})
  }
  componentDidMount () {
    const player =  this.player.current
    player.addEventListener('ended', function () {
      player.src = player.src.indexOf('01.mp3') > -1 ? '/audio/02.mp3' : '/audio/01.mp3'
      player.play()
    })
  }
  render () {
    const { isPlaying } = this.state

    return (
      <>
        <audio src="/audio/01.mp3" muted autoPlay ref={this.player}/>
        <img
          onClick={this.handleClick}
          className={classnames('player', {'player-playing': isPlaying})}
          src="/audio/cd.png"
        />
      </>
    )
  }
}
