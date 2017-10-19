/**
 * Created by jiangyukun on 2017/7/3.
 */
import React from 'react'
import {Route} from 'react-router-dom'

import pages from '../../core/pages'

import Chunk from './Chunk'
import QuestionList from './lazy-page/question-list'
import AnswerList from './lazy-page/answer-list'

interface PageContentProps {
  match: any
}

class PageContent extends React.Component<PageContentProps> {
  mapper: {}

  componentWillMount() {
    const {questionList, answerList} = pages
    this.mapper = {
      [questionList]: () => <Chunk load={QuestionList}/>,
      [answerList]: () => <Chunk load={AnswerList}/>

    }
  }

  render() {
    const {match} = this.props
    const {questionList, answerList} = pages
    return (
      <div className="page-content">
        <Route path={`${match.url}/${questionList}`} component={this.mapper[questionList]}/>
        <Route path={`${match.url}/${answerList}`} component={this.mapper[answerList]}/>
      </div>
    )
  }
}

export default PageContent
