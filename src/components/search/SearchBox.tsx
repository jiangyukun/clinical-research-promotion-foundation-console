/**
 * Created by jiangyukun on 2017/10/20.
 */
import React from 'react'

interface SearchBoxProps {
  value: string
  onChange: (value) => void
  search: () => void
}

class SearchBox extends React.Component<SearchBoxProps> {
  render() {
    return (
      <div className="search-box">
        <input className="search-input" value={this.props.value} onChange={e => this.props.onChange(e.target.value)}/>
        <img src={require('./search.svg')} onClick={this.props.search}/>
      </div>
    )
  }
}

export default SearchBox
