/**
 * Created by jiangyukun on 2017/10/20.
 */
import {fromJS} from 'immutable'

import {ANSWER_LIST} from '../../core/constants/types'
import phase from '../../core/constants/phase'
import {handleFlagState} from '../../core/utils/reduxUtils'


const initValue = {
  addAnswerSuccess: false,
  updateAnswerSuccess: false,
}

export default function answer(iState = fromJS(initValue), action): any {
  let nextIState = iState
  switch (action.type) {

  }

  nextIState = handleFlagState(nextIState, action, ANSWER_LIST.ADD_ANSWER, 'addAnswerSuccess')
  nextIState = handleFlagState(nextIState, action, ANSWER_LIST.UPDATE_ANSWER, 'updateAnswerSuccess')

  return nextIState
}
