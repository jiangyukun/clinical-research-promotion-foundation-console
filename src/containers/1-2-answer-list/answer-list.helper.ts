/**
 * Created by jiangyukun on 2017/10/20.
 */
 export function handleAnswerList(data) {
  return {
     total: data['count'],
     list: data['list']
   }
}
