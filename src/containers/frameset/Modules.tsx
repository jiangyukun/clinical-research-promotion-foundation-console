/**
 * Created by jiangyukun on 2017/7/21.
 */
import React from 'react'
import classnames from 'classnames'
import {Link} from 'react-router-dom'

import CssTransition from '../../components/CssTransition'

import pages from '../../core/pages'
import {getPath} from '../../core/env'

interface ModulesProps {
  currentPath: string
}

class Modules extends React.Component<ModulesProps> {
  state = {
    open: true
  }

  render() {
    const currentPath = this.props.currentPath

    const questionList = getPath(pages.questionList)
    const answerList = getPath(pages.answerList)

    return (
      <div className="modules">
        <header onClick={() => this.setState({open: !this.state.open})}>问题管理</header>

        <CssTransition visible={this.state.open} timeout={500}>
          <main>
            <ul className="nav-items">

              <li className={classnames({'active': currentPath == getPath(pages.questionList)})}>
                <Link to={questionList}>提问列表</Link>
              </li>

              <li className={classnames({'active': currentPath == getPath(pages.answerList)})}>
                <Link to={answerList}>回答列表</Link>
              </li>

            </ul>
          </main>
        </CssTransition>
      </div>
    )
  }
}

export default Modules
