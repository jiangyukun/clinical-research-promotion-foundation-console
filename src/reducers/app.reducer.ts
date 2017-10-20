/**
 * Created by jiangyukun on 2017/7/5.
 */
import {fromJS} from 'immutable'

import {APP} from '../core/constants/types'
import phase from '../core/constants/phase'

const initValue = {
  user: {},

}

export default function app(iState = fromJS(initValue), action) {
  let nextIState = iState
  switch (action.type) {
    case APP.INIT_USER:
      nextIState = nextIState.set('user', action.user)
      break
  }

  return nextIState
}
