import React, { Component } from 'react'
import './index.css'

class Header extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <nav>
        <span className='goBack' onClick={this.props.goback}>{this.props.name}</span>
        <h4>{this.props.data.title}</h4>
      </nav>
    )
  }
}

export default Header
