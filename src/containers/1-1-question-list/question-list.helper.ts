/**
 * Created by jiangyukun on 2017/10/20.
 */

const mapper = {
  1: '未回答',
  2: '已回答',
  3: '暂缓',
  4: '无效',
}

export function handleQuestionList(data) {
  return {
    total: data['count'],
    list: data['list']
  }
}

export function getQuestionStatus(code) {
  return mapper[code]
}
