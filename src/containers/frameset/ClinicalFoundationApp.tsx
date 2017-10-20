/**
 * Created by jiangyukun on 2017/4/11.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MessageManage from 'wj-appcore/message/'
import {changeMessageStatus} from 'wj-appcore/message/message.action'

import Header from './Header'
import PageContent from './PageContent'
import Modules from './Modules'

interface SimoCrmAppProps {
  message: any
  changeMessageStatus: any
  match: any
  currentPath: string
  router: any
}

class ClinicalFoundationApp extends React.Component<SimoCrmAppProps> {
  static contextTypes = {
    router: PropTypes.any
  }

  render() {
    return (
      <div className="app">
        <MessageManage messageList={this.props.message.msgQueue} changeMessageStatus={this.props.changeMessageStatus}/>
        <aside>
          <header className="brand-name">
            CRPF
          </header>
          <nav className="nav-container">
            <Modules
              currentPath={this.props.currentPath}/>
          </nav>
        </aside>
        <main>
          <Header/>
          <PageContent match={this.props.match}/>
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let currentPath = state.router.location.pathname
  return {
    ...state.app,
    message: state.message,
    recentOpenList: state.recentOpenList,
    newUserStatus: state.newUserStatus,
    currentPath,
    router: state.router
  }
}

export default connect(mapStateToProps, {
  changeMessageStatus
})(ClinicalFoundationApp)
