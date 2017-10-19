/**
 * Created by jiangyukun on 2017/6/29.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import message from 'wj-appcore/message/message.reducer'
import {wrapReducerState} from 'wj-appcore/tools/redux-utils'

import app from './app.reducer'

export default combineReducers({
  router: routerReducer,
  app: wrapReducerState(app),
  message: wrapReducerState(message),

})
