/**
 * Created by jiangyukun on 2017/7/5.
 */
export default function load(callback) {
  require.ensure([], require => {
    const AnswerList = require('../../1-2-answer-list/AnswerList')
    callback(AnswerList)
  }, 'answer-list')
}
