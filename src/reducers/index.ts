/**
 * Created by jiangyukun on 2017/6/29.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import message from 'wj-appcore/message/message.reducer'
import {wrapReducerState} from 'wj-appcore/tools/redux-utils'

import {QUESTION_LIST, ANSWER_LIST} from '../core/constants/types'
import app from './app.reducer'
import data from './data.reducer'

import question from '../containers/1-1-question-list/question.reducer'
import answer from '../containers/1-2-answer-list/answer.reducer'

export default combineReducers({
  router: routerReducer,
  app: wrapReducerState(app),
  message: wrapReducerState(message),

  question: wrapReducerState(question),
  questionList: wrapReducerState(data(QUESTION_LIST.FETCH_LIST)),
  answer: wrapReducerState(answer),
  answerList: wrapReducerState(data(ANSWER_LIST.FETCH_LIST))

})
