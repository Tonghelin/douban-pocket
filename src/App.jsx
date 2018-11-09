import React, { Component } from 'react'
import './style.css'
import TabNav from './tabNav/index'
import ListView from './listView/index'
import Search from './search/index'
import { getData } from './util/getData'
import Detail from './detail/bookDetail'
class App extends Component {
  constructor (props) {
    super(props)
    this.itemCon = ['图书', '电影', '音乐']
    this.state = {
      searchValue: '',
      type: 0, // 0 图书 1 电影 2 音乐
      currentTab: 0,
      movieData: null,
      musicData: null,
      bookData: null,
      isDetail: false,
      detailData: null
    }
    // this._getSearchData =this._getSearchData.bind(this)
    this.handleShowDetail = this.handleShowDetail.bind(this)
    this.handleGoBack = this.handleGoBack.bind(this)
  }
  //
  componentWillMount () {
    // * https://api.douban.com/v2/book/search?q=我是传奇&start=1
    let bookApi = `https://api.douban.com/v2/book/search?q=''`
    // * https://api.douban.com/v2/movie/search?q=后天
    let movieApi = `https://api.douban.com/v2/movie/search?q=''`
    // * https://api.douban.com/v2/music/search?q=因你而在&start=1
    let musicApi = 'https://api.douban.com/v2/music/search?q=张信哲'
    // * https://api.douban.com/v2/movie/top250
    let movieTopApi = 'https://api.douban.com/v2/movie/top250'

    // 初始化数据
    this._initData(bookApi, 'book')
    this._initData(movieTopApi, 'movie')
    this._initData(musicApi, 'music')
  }
  // 用户搜索数据
  _getSearchData (getUrl, type) {
    // TODO
    const types = ['books', 'subjects', 'musics']
    getData(getUrl).then(
      (res) => {
        switch (type) {
          case 0:
            this.setState({ bookData: res.books })
            break
          case 1:
            this.setState({ movieData: res.subjects })
            break
          case 2:
            this.setState({ musicData: res.musics })
            break
        }
      }
    ).catch(
      (error) => {
        console.log('error', error)
      }
    )
  }
  // 初始化数据
  _initData (getUrl, typeData) {
    getData(getUrl).then(
      (res) => {
        switch (typeData) {
          case 'book':
            this.setState({ bookData: res.books })
            break
          case 'movie':
            this.setState({ movieData: res.subjects })
            break
          case 'music':
            this.setState({ musicData: res.musics })
            break
        }
      }
    ).catch(
      (error) => {
        console.log('error', error)
      }
    )
  }
  // 绑定键盘事件
  handleKeyUp (event) {
    let searchValue = event.target.value
    this.setState({
      searchValue
    })
  }
  // 绑定搜索按钮
  handleSearch () {
    let value = this.state.searchValue.trim()
    if (!value) {
      return
    }
    switch (this.state.type) {
      case 0:
        let bookApi = `https://api.douban.com/v2/book/search?q=${this.state.searchValue}&start=1`
        this._getSearchData(bookApi, 0)
        break
      case 1:
        let movieApi = `https://api.douban.com/v2/movie/search?q=${this.state.searchValue}`
        this._getSearchData(movieApi, 1)
        break
      case 2:
        let musicApi = `https://api.douban.com/v2/music/search?q=${this.state.searchValue}`
        this._getSearchData(musicApi, 2)
        break
    }
    // TODO 开始调用ajax搜索
  }
  // 绑定标签导航事件
  handleTabNav (index) { // 导航标签
    this.setState({
      currentTab: index,
      type: index
    })
  }

  handleShowDetail (data, type) {
    let isDetail = this.state.isDetail
    this.setState({
      isDetail: !isDetail,
      detailData: data
    })
  }
  // 返回事件
  handleGoBack () {
    let isDetail = this.state.isDetail
    this.setState({
      isDetail: !isDetail,
      detailData: null
    })
  }
  render () {
    let isDetail = this.state.isDetail
    return (
      <div>
        {
          isDetail ? (<div className='app'>
            <Detail data={this.state.detailData} type={this.state.type} goback={this.handleGoBack} />
          </div>) : (<div className='app'>
            <Search onChange={this.handleKeyUp.bind(this)} search={this.handleSearch.bind(this)} />
            <ListView
              showPage={this.state.currentTab}
              movieData={this.state.movieData}
              musicData={this.state.musicData}
              bookData={this.state.bookData}
              handleShowDetail={this.handleShowDetail}
            />
            <TabNav activeTab={this.state.currentTab} itemCon={this.itemCon} active={this.handleTabNav.bind(this)} />
          </div>)
        }
      </div>
    )
  };
};

module.exports = App
