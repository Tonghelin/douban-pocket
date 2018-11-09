import React, { Component } from 'react'
import './index.css'

class TabNav extends Component {
  constructor (props) {
    super(props)
    this.item = this.props.itemCon
    this.state = {
      activeTab: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.check_item_index = this.check_item_index.bind(this)
  }

  check_item_index (index) {
    let activeTab = index === this.props.activeTab ? 'nav_active' : ''
    // this.props.active()
    return activeTab
  }
  // 绑定导航点击事件
  handleClick (index) {
    this.setState({
      activeTab: index
    })
    this.props.active(index)
  }

  render () {
    return (
      <div className='footer'>
        <ul className='tab_wrap'>
          {/* <li className={'tab_nav_item '} ref={(tabItem) => this.tabItem = tabItem} onClick={this.props.active(this.tabItem)}>图书</li> */}
          {/* <li className='tab_nav_item'>电影</li> */}
          {/* <li className='tab_nav_item'>音乐</li> */}
          {
            this.item.map((item, index) => {
              return <li className={'tab_nav_item ' + this.check_item_index(index)} key={index} onClick={() => this.handleClick(index)}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default TabNav
