import React, { Component } from 'react'
import './index.css'
import Header from './header'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.goback = this.goback.bind(this)
  }
  goback () {
    this.props.goback()
  }
  render () {
    let type = this.props.type
    let name = null
    switch (type) {
      case 0:
        name = '图书'
        break
      case 1:
        name = '电影'
        break
      case 2:
        name = '音乐'
        break
    }
    let data = this.props.data
    return (
      <div className='wrap'>
        <Header data={data} name={name} goback={this.goback} />
        {
          type === 0 ? <BookDetail data={data} /> : ''
        }
        {
          type === 1 ? <MovieDetail data={data} /> : ''
        }
        {
          type === 2 ? <MusicDetail data={data} /> : ''
        }

      </div>
    )
  }
}

class BookDetail extends Component {
  render () {
    let data = this.props.data
    return (
      <div className='detail-wrap'>
        <div className='detail-header'>
          <div className='book-cover'>
            <img src={data.image} alt='' width='110' height={140} />
          </div>
          <ul>
            <li>名称: {data.title}</li>
            <li>作者: {data.author}</li>
            <li>出版社: {data.publisher}</li>
            <li>日期: {data.pubdate}</li>
            <li>评分: {data.rating.average}</li>
            <li>价钱: {data.price}</li>
            <li className='label-sign'>{data.tags.map((item, index) => { return <span className='books-tags' key={index}>{item.title}</span> })}</li>
          </ul>
        </div>
        <div className='detail-content'>
          <h5>简介</h5>
          <p>
            {data.summary}
          </p>
        </div>
      </div>
    )
  }
}

class MovieDetail extends Component {
  render () {
    let data = this.props.data
    return (
      <div className='detail-wrap'>
        <div className='movie-detail-header'>
          <img src={data.images.large} alt='' width='100%' />
        </div>
        <div className='detail-content'>
          <h4>简介</h4>
          <ul>
            <li>名称: {data.title}</li>
            <li>导演: {data.directors.map((item, index) => { return <span key={index}>{item.name}</span> })}</li>
            <li>上映时间: {data.year}</li>
            <li>评分: {data.rating.average}</li>
            <li className='label-sign'>{data.genres.map((item, index) => { return <span className='books-tags' key={index}>{item}</span> })}</li>
          </ul>
          <h4>演员表</h4>
          <div className='movie-casts'>
            {
              data.casts.map((item, index) => {
                return (<div className='casts-item' key={index}>
                  <img src={item.avatars.small} alt='' />
                  <span><a href=''>{item.name}</a></span>
                </div>)
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

class MusicDetail extends Component {
  render () {
    let data = this.props.data
    return (
      <div className='detail-wrap'>
        <div className='detail-header'>
          <div className='book-cover'>
            <img src={data.image} alt='' width='110' height={140} />
          </div>
          <ul>
            <li>歌名: {data.title}</li>
            <li>歌手: {data.author.map((item, index) => { return <span key={index}>{item.name}&nbsp;&nbsp;</span> })}</li>
            <li>发行年份: {data.pubdate}</li>
            <li>评分: {data.rating.average}</li>
            <li>发布商: {data.publisher}</li>
            <li className='label-sign'>{data.tags.map((item, index) => { return <span className='books-tags' key={index}>{item.name}</span> })}</li>
          </ul>
        </div>
        <div className='detail-content'>
          <h5>简介</h5>
          <p>
            {data.attrs.tracks}
          </p>
        </div>
      </div>
    )
  }
}

export default Detail
