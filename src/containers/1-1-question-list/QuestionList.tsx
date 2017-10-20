/**
 * Created by jiangyukun on 2017/10/19.
 */
import React from 'react'
import {connect} from 'react-redux'

import {FixHeadList, FixHead, FixBody, FixRow} from '../../components/fix-head-list/'
import SearchBox from '../../components/search/SearchBox'
import PageCountNav from '../../components/nav/PageCountNav'

import Data from '../../core/interface/Data'
import {fetchList} from './question-list.action'
import {handleListData} from '../common/common'

interface QuestionListProps {
  fetchList: (page, pageSize, searchKey) => void
  questionList: Data<any>
}

class QuestionList extends React.Component<QuestionListProps> {
  state = {
    index: -1,
    searchKey: '',
    currentPage: 0
  }

  toPage = (newPage?: number) => {
    if (newPage == null) newPage = this.state.currentPage
    if (newPage != this.state.currentPage) {
      this.setState({currentPage: newPage})
    }
    this.props.fetchList(this.state.currentPage, 10, this.state.searchKey)
  }

  componentDidMount() {
    this.toPage(0)
  }

  render() {
    const {total, list, loading, loaded} = handleListData(this.props.questionList)

    return (
      <div className="app-function-page">
        <div className="search-box-wrapper">
          <SearchBox value={this.state.searchKey} onChange={v => this.setState({searchKey: v})} search={() => this.toPage(0)}/>
        </div>

        <FixHeadList>
          <FixHead>
            <FixHead.Item>问题</FixHead.Item>
            <FixHead.Item>提问时间</FixHead.Item>
            <FixHead.Item>回答状态</FixHead.Item>
            <FixHead.Item>备注</FixHead.Item>
          </FixHead>
          <FixBody>
            {
              list.map((item, index) => {
                return (
                  <FixRow key={item['questionId']}
                          onClick={() => this.setState({index})}
                          selected={this.state.index == index}>
                    <FixRow.Item>{item['questionContent']}</FixRow.Item>
                    <FixRow.Item>{item['createTime']}</FixRow.Item>
                    <FixRow.Item>{item['answerStatus']}</FixRow.Item>
                    <FixRow.Item>{item['remark']}</FixRow.Item>
                  </FixRow>
                )
              })
            }
          </FixBody>
        </FixHeadList>
        <PageCountNav currentPage={this.state.currentPage} total={total} onPageChange={this.toPage}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    questionList: state.questionList
  }
}

export default connect(mapStateToProps, {fetchList})(QuestionList)
