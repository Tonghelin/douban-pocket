import React, { Component } from 'react'
import './index.css'

class Search extends Component {
  render () {
    return (
      <div className='search-wrap bar6 search'>
        <form action=''>
          <input className='search-input' type='text' onChange={this.props.onChange} />
          <button type='button' className='search-button' onClick={this.props.search} />
        </form>
      </div>
    )
  }
}

export default Search
