/**
 * Created by jiangyukun on 2017/2/24.
 */
import React from 'react'

interface HighLightProps {
  txt: string
  match: string
  children?: any
}

const HighLight = (props: HighLightProps) => {
  let handledText = []
  if (props.txt) {
    handledText.push(getMatchTextList(props.txt, props.match))
  } else if (props.children) {
    handledText = React.Children.map(props.children, child => {
      if (typeof child != 'string') {
        return child
      }
      return getMatchTextList(child, props.match)
    })
  }

  return (
    <span>
      {
        handledText.map((matches, index) => {
          if (!(matches instanceof Array)) {
            return matches
          }
          return (
            <span key={index}>
            {
              matches.map((m, index) => {
                if (m == props.match) {
                  return <span key={index} style={{color: '#f05050'}}>{props.match}</span>
                }
                return m
              })
            }
          </span>
          )
        })
      }
      </span>
  )
}

export default HighLight


function getMatchTextList(str, part) {
  if (!str) {
    return []
  }
  if (!part) {
    return [str]
  }
  const index = str.indexOf(part)
  if (index == -1) {
    return [str]
  }
  let result = []
  if (str.substring(0, index) != '') {
    result.push(str.substring(0, index))
  }
  result.push(part)
  return result.concat(getMatchTextList(str.substr(index + part.length), part))
}
