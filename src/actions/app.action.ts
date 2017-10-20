/**
 * Created by jiangyukun on 2017/6/30.
 */
import phase from '../core/constants/phase'

export function clearState(type: string) {
  return {
    type: phase.CLEAR + type
  }
}
