/**
 * Created by jiangyukun on 2017/7/12.
 */
import phase from '../../core/constants/phase'

export function handleClearState(iState, action, type, key) {
  if (action.type == phase.CLEAR + type) {
    return iState.set(key, false)
  }

  return iState
}

export function handleFlagState(iState, action, type, key) {
  if (action.type == phase.CLEAR + type) {
    return iState.set(key, false)
  }
  if (action.type == type + phase.SUCCESS) {
    return iState.set(key, true)
  }
  return iState
}
