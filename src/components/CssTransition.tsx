/**
 * Created by jiangyukun on 2017/7/21.
 */
import React from 'react'
import classnames from 'classnames'

interface CssTransitionProps {
  visible: boolean
  timeout: number
}

class CssTransition extends React.Component<CssTransitionProps> {
  id: any
  state = {
    show: true
  }

  componentWillMount() {
    this.setState({show: this.props.visible})
  }

  componentWillReceiveProps(nextProps: CssTransitionProps) {
    if (this.props.visible && !nextProps.visible) {
      this.id = setTimeout(() => this.setState({show: false}), this.props.timeout)
    }
    if (nextProps.visible) {
      if (this.id) {
        clearTimeout(this.id)
      }
      this.setState({show: true})
    }
  }

  render() {
    let child = React.Children.only(this.props.children)

    if (!this.state.show) {
      return null
    }
    if (!this.props.visible && this.state.show) {
      child = React.cloneElement(child, {className: classnames('leave', child.props.className)})
    }
    return child
  }
}

export default CssTransition
