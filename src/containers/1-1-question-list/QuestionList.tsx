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
import {getQuestionStatus} from './question-list.helper'
import HighLight from '../../components/txt/HighLight'
import {getDateTimeStr} from '../../core/utils/dateUtils'

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
    this.props.fetchList(newPage, 10, this.state.searchKey)
  }

  componentDidMount() {
    this.toPage(0)
  }

  render() {
    const {total, list, loading, loaded} = handleListData(this.props.questionList)

    return (
      <div className="app-function-page">
        <div className="search-box-wrapper">
          <SearchBox
            placeholder="请输入问题关键字"
            value={this.state.searchKey} onChange={v => this.setState({searchKey: v})} search={() => this.toPage(0)}/>
        </div>

        <FixHeadList total={total}>
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
                    <FixRow.Item>
                      <HighLight match={this.state.searchKey} txt={item['questionContent']}/>
                    </FixRow.Item>
                    <FixRow.Item>{getDateTimeStr(item['createTime'])}</FixRow.Item>
                    <FixRow.Item>{getQuestionStatus(item['answerStatus'])}</FixRow.Item>
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
