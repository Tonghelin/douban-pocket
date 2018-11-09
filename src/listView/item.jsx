import React, { Component } from 'react'
import './index.css'

class ListItem extends Component {
  constructor (props) {
    super(props)
    this.handleShowDetail = this.handleShowDetail.bind(this)
  }

  handleShowDetail (data, type) {
    this.props.handleShowDetail(data, type)
  }

  render () {
    // let {} = this.porps.data;
    let type = this.props.type
    const data = this.props.data
    const index = this.props.index
    return (
      <div className='list-item-wrap'>
        {
          type === 0 ? <BookItem key={index} data={data} type={type} index={index} handleShowDetail={this.handleShowDetail} /> : ''
        }
        {
          type === 1 ? <MovieItem key={index} data={data} type={type} index={index} handleShowDetail={this.handleShowDetail} /> : ''
        }
        {
          type === 2 ? <MusicItem key={index} data={data} type={type} index={index} handleShowDetail={this.handleShowDetail} /> : ''
        }
      </div>
    )
  }
}

class BookItem extends Component {
  constructor (props) {
    super(props)
    this.handleShowDetail = this.handleShowDetail.bind(this)
  }
  handleShowDetail () {
    let data = this.props.data
    let type = this.props.type
    console.log('type====', type)
    this.props.handleShowDetail(data, type)
  }
  render () {
    let data = this.props.data
    return (
      <div className='list-item' onClick={this.handleShowDetail}>
        <div className='item-left'>
          <img src={data.image} width='100%' height='100%' alt='' />
        </div>
        <div className='item-right'>
          <ul className='item-right-wrap'>
            <li className='label-title'>名称: {data.title}</li>
            <li className='label-sign'>
              {data.tags.map((item, index) => { return (<span key={index} className='books-tags'>{item.title}</span>) })}
            </li>
            <li className='label-author'>作者: {data.author.map((item, index) => { return (<span key={index}>{item}</span>) })}</li>
            <li className='label-grade'>评分: {data.rating.average} </li>
            <li className='label-time'>时间: {data.pubdate}</li>
          </ul>
        </div>
      </div>
    )
  }
}

class MovieItem extends Component {
  constructor (props) {
    super(props)
    this.handleShowDetail = this.handleShowDetail.bind(this)
  }
  handleShowDetail () {
    let data = this.props.data
    let type = this.props.type
    this.props.handleShowDetail(data, type)
  }
  render () {
    let data = this.props.data
    return (
      <div className='list-item' onClick={this.handleShowDetail}>
        <div className='item-left'>
          <img src={data.images.small} width='100%' height='100%' alt='' />
        </div>
        <div className='item-right'>
          <ul className='item-right-wrap'>
            <li className='label-title'>名称: {data.title}</li>
            <li className='label-sign'>
              {data.genres.map((item, index) => { return (<span key={index} className='movie-tags'>{item}</span>) })}
            </li>
            <li className='label-author'>演员: {data.casts.map((item, index) => { return (<span key={index}>{item.name}</span>) })}</li>
            <li className='label-grade'>评分: {data.rating.average}</li>
            <li className='label-time'>时间: {data.year}</li>
          </ul>
        </div>
      </div>
    )
  }
}

class MusicItem extends Component {
  constructor (props) {
    super(props)
    this.handleShowDetail = this.handleShowDetail.bind(this)
  }
  handleShowDetail () {
    let data = this.props.data
    let type = this.props.type
    console.log('type====', type)
    this.props.handleShowDetail(data, type)
  }
  render () {
    let data = this.props.data
    return (
      <div className='list-item' onClick={this.handleShowDetail}>
        <div className='item-left'>
          <img src={data.image} width='100' height='130' alt='' />
        </div>
        <div className='item-right'>
          <ul className='item-right-wrap'>
            <li className='label-title'>歌名: {data.title}</li>
            <li className='label-sign'>
              {data.tags.map((item, index) => { return (<span key={index} className='music-tags'>{item.name}</span>) })}
            </li>
            <li className='label-author'>歌手: {data.author.map((item, index) => { return (<span key={index}>{item.name}</span>) })}</li>
            <li className='label-grade'>评分: {data.rating.average}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ListItem
