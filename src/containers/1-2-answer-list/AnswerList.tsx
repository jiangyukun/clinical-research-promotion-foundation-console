/**
 * Created by jiangyukun on 2017/10/19.
 */
import React from 'react'
import {connect} from 'react-redux'

import {FixHeadList, FixHead, FixBody, FixRow} from '../../components/fix-head-list/'
import SearchBox from '../../components/search/SearchBox'
import PageCountNav from '../../components/nav/PageCountNav'
import AddAnswerDialog from './dialog/AddAnswerDialog'

import Data from '../../core/interface/Data'
import {fetchList, addAnswer, updateAnswer} from './answer-list.action'
import {handleListData} from '../common/common'
import CommonFunction from '../../core/interface/CommonFunction'
import {ANSWER_LIST} from '../../core/constants/types'
import UpdateAnswerDialog from './dialog/UpdateAnswerDialog'
import HighLight from '../../components/txt/HighLight'
import {getDateTimeStr} from '../../core/utils/dateUtils'

interface AnswerListProps extends CommonFunction {
  fetchList: any
  answerList: Data<any>
  addAnswer: (options) => void
  addAnswerSuccess: boolean
  updateAnswer: (options) => void
  updateAnswerSuccess: boolean
}

class AnswerList extends React.Component<AnswerListProps> {
  state = {
    index: -1,
    searchKey: '',
    currentPage: 0,
    showAdd: false,
    showEdit: false
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

  componentWillReceiveProps(nextProps: AnswerListProps) {
    if (!this.props.addAnswerSuccess && nextProps.addAnswerSuccess) {
      this.props.showSuccess('添加问答成功！')
      this.props.clearState(ANSWER_LIST.ADD_ANSWER)
      this.toPage(0)
    }
    if (!this.props.updateAnswerSuccess && nextProps.updateAnswerSuccess) {
      this.props.showSuccess('更新问答成功！')
      this.props.clearState(ANSWER_LIST.UPDATE_ANSWER)
      this.toPage()
    }
  }

  render() {
    const {total, list, loading, loaded} = handleListData(this.props.answerList)
    let item = list[this.state.index] || {}

    return (
      <div className="app-function-page">
        {
          this.state.showAdd && (
            <AddAnswerDialog
              addAnswer={this.props.addAnswer}
              addAnswerSuccess={this.props.addAnswerSuccess}
              onExited={() => this.setState({showAdd: false})}
            />
          )
        }
        {
          this.state.showEdit && (
            <UpdateAnswerDialog
              answerInfo={item}
              updateAnswer={this.props.updateAnswer}
              updateAnswerSuccess={this.props.updateAnswerSuccess}
              onExited={() => this.setState({showEdit: false})}
            />
          )
        }
        <div className="search-box-wrapper">
          <button className="btn" onClick={() => this.setState({showAdd: true})}>新增</button>
          <button className="btn" disabled={this.state.index == -1} onClick={() => this.setState({showEdit: true})}>查看</button>
          <div className="pull-right">
            <SearchBox
              placeholder="请输入回答关键字"
              value={this.state.searchKey} onChange={v => this.setState({searchKey: v})} search={() => this.toPage(0)}/>
          </div>
        </div>

        <FixHeadList total={total}>
          <FixHead>
            <FixHead.Item>问题</FixHead.Item>
            <FixHead.Item>回答</FixHead.Item>
            <FixHead.Item>发布时间</FixHead.Item>
            <FixHead.Item>更新时间</FixHead.Item>
            <FixHead.Item>备注</FixHead.Item>
          </FixHead>
          <FixBody>
            {
              list.map((item, index) => {
                return (
                  <FixRow key={item['answerId']}
                          onClick={() => this.setState({index})}
                          selected={this.state.index == index}>
                    <FixRow.Item>
                      <HighLight match={this.state.searchKey} txt={item['questionContent']}/>
                    </FixRow.Item>
                    <FixRow.Item>
                      <HighLight match={this.state.searchKey} txt={item['answerContent']}/>
                    </FixRow.Item>
                    <FixRow.Item>{getDateTimeStr(item['createTime'])}</FixRow.Item>
                    <FixRow.Item>{getDateTimeStr(item['updateTime'])}</FixRow.Item>
                    <FixRow.Item>{getDateTimeStr(item['remark'])}</FixRow.Item>
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
    answerList: state.answerList,
    addAnswerSuccess: state.answer.addAnswerSuccess,
    updateAnswerSuccess: state.answer.updateAnswerSuccess
  }
}

export default connect(mapStateToProps, {fetchList, addAnswer, updateAnswer})(AnswerList)
