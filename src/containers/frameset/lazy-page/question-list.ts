/**
 * Created by jiangyukun on 2017/7/5.
 */
export default function load(callback) {
  require.ensure([], require => {
    const QuestionList = require('../../1-1-question-list/QuestionList')
    callback(QuestionList)
  }, 'question-list')
}
