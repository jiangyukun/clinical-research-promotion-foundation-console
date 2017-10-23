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
}

class Header extends React.Component<HeaderProps> {
  state = {
    active: false,
  }

  logout = () => {
    _get(context + '/backend/user/v1/logout')
    if (location.href.indexOf('inline') != -1) {
      location.href = `${context}/inline/login`
    } else {
      location.href = `${context}/login`
    }
  }

  render() {
    return (
      <header>
        <div>
          <OuterClick onOuterClick={() => this.setState({active: false})}>
            <div className={classnames('user-info', {active: this.state.active})}>
              <div className="user-name" onClick={() => this.setState({active: !this.state.active})}>
                welcome
                <img src={require('./icon/down.svg')}/>
              </div>
              <CssTransition visible={this.state.active} timeout={300}>
                <ul className="dropdown-item-container">
                  <li className="dropdown-item is-btn" onClick={this.logout}>退出登录</li>
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
