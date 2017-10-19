/**
 * Created by jiangyukun on 2017/7/17.
 */

export function addListItem(list, item) {
  list.push(item)
  return list
}

export function updateItemAtIndex(list, index, callback) {
  callback(list[index])
  return list
}
