/**
 * Created by jiangyukun on 2017/8/30.
 */
import React from 'react'
import classnames from 'classnames'
import OuterClick from 'wj-appcore/core/OuterClick'

import CssTransition from '../../components/CssTransition'

import {context} from '../../core/env'
import {_get} from '../../core/http'

interface HeaderProps {
  user: any
}

class Header extends React.Component<HeaderProps> {
  state = {
    active: false,
  }

  logout = () => {
    _get('/user/v1/logout')
    location.href = `${context}/login`
  }

  componentWillMount() {
    let {currentStatus, userStatusInfo} = this.props.user
    const {newStatus, startDate, endDate} = userStatusInfo
    this.setState({currentStatus, newStatus, startDate, endDate})
  }

  render() {
    let {userName, email} = this.props.user
    return (
      <header>
        <div>
          <OuterClick onOuterClick={() => this.setState({active: false})}>
            <div className={classnames('user-info', {active: this.state.active})}>
              <div className="user-name" onClick={() => this.setState({active: !this.state.active})}>
                {userName}
                <img src={require('./icon/down.svg')}/>
              </div>
              <CssTransition visible={this.state.active} timeout={300}>
                <ul className="dropdown-item-container">
                  <li className="dropdown-item text">{email}</li>
                  <li className="dropdown-item btn" onClick={() => this.setState({showResetPassword: true, active: false})}>修改密码</li>
                  <li className="dropdown-item btn" onClick={this.logout}>退出登录</li>
                </ul>
              </CssTransition>
            </div>
          </OuterClick>
        </div>
      </header>
    )
  }
}

export default Header
