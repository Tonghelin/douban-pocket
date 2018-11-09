import React, { Component } from 'react'
import './index.css'
import ListItem from './item'

class ListView extends Component {
  constructor (props) {
    super(props)
    this.handleShowDetail = this.handleShowDetail.bind(this)
  }
  componentDidMount () {
    // console.dir(this.props.bookData);
  }
  handleShowDetail (data, type) {
    this.props.handleShowDetail(data, type)
  }
  render () {
    let data
    let pageType = this.props.showPage
    switch (pageType) {
      case 0:
        data = this.props.bookData
        break
      case 1:
        data = this.props.movieData
        break
      case 2:
        data = this.props.musicData
        break
    }

    return (

      <div className='list_view'>
        {
          data ? data.map((item, index) => {
            return (<ListItem
              data={item}
              type={pageType}
              key={index}
              index={index}
              handleShowDetail={this.handleShowDetail}
            />)
          }) : '暂无数据'
        }
      </div>
    )
  }
}

export default ListView
