/**
 * Created by jiangyukun on 2017/10/20.
 */
import {_get, _post} from '../../core/http'
import {THREE_PHASE} from '../../middlewares/request_3_phase'
import {ANSWER_LIST} from '../../core/constants/types'
import {handleAnswerList} from './answer-list.helper'

const urlPrefix = '/backend/answer'

export function fetchList(page, pageSize, searchKey) {
  return {
    [THREE_PHASE]: {
      type: ANSWER_LIST.FETCH_LIST,
      http: () => _get(urlPrefix + `/v1/list?start=${page}&rows=${pageSize}&searchKey=${searchKey}`),
      handleResponse: handleAnswerList
    }
  }
}

export function addAnswer(options) {
  return {
    [THREE_PHASE]: {
      type: ANSWER_LIST.ADD_ANSWER,
      http: () => _post(urlPrefix + '/v1/operate/answer', {body: options})
    }
  }
}

export function updateAnswer(options) {
  return {
    [THREE_PHASE]: {
      type: ANSWER_LIST.UPDATE_ANSWER,
      http: () => _post(urlPrefix + '/v1/operate/answer', {body: options})
    }
  }
}
