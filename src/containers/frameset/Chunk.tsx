/**
 * Created by jiangyukun on 2017/4/27.
 */
import React from 'react'
import addCommonFunction from '../../core/hoc/addCommonFunction'

interface ChunkProps {
  load: any
}

class Chunk extends React.Component<ChunkProps> {
  state = {
    lazyComponent: null
  }

  componentDidMount() {
    this.props.load(lazyComponent => {
      const Component = addCommonFunction(lazyComponent.default)
      this.setState({lazyComponent: Component})
    })
  }

  render() {
    if (!this.state.lazyComponent) {
      return (
        <div className="loading-resource">加载资源中...</div>
      )
    }
    const {load, ...otherProps} = this.props
    const Component = this.state.lazyComponent
    return <Component {...otherProps}/>
  }
}

export default Chunk
