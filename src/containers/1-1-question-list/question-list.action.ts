/**
 * Created by jiangyukun on 2017/10/20.
 */
import {_get} from '../../core/http'
import {THREE_PHASE} from '../../middlewares/request_3_phase'
import {QUESTION_LIST} from '../../core/constants/types'
import {handleQuestionList} from './question-list.helper'

const urlPrefix = '/backend/question'

export function fetchList(page, pageSize, searchKey) {
  return {
    [THREE_PHASE]: {
      type: QUESTION_LIST.FETCH_LIST,
      http: () => _get(urlPrefix + `/v1/list?start=${page}&rows=${pageSize}&searchKey=${searchKey}`),
      handleResponse: handleQuestionList
    }
  }
}
