/**
 * Created by jiangyukun on 2017/10/20.
 */
import React from 'react'

interface SearchBoxProps {
  value: string
  onChange: (value) => void
  search: () => void
  placeholder?: string
}

class SearchBox extends React.Component<SearchBoxProps> {
  static defaultProps = {
    placeholder: '请输入'
  }

  search = e => {
    e.preventDefault()
    this.props.search()
  }

  render() {
    return (
      <form className="search-box" onSubmit={this.search}>
        <input className="search-input"
               placeholder={this.props.placeholder}
               value={this.props.value} onChange={e => this.props.onChange(e.target.value)}/>
        <img src={require('./search.svg')} onClick={this.props.search}/>
      </form>
    )
  }
}

export default SearchBox
