/**
 * Created by jiangyukun on 2016/11/26.
 */
import React from 'react'
import {Route} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'

import ClinicalFoundationApp from './frameset/ClinicalFoundationApp'

import {getPathPrefix} from '../core/env'

interface RootProps {
  store: any,
  history: any
}

class Root extends React.PureComponent<RootProps> {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Route path={getPathPrefix()} component={({match}) => <ClinicalFoundationApp match={match}/>}/>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
