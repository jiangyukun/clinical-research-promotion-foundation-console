function getActionTypeFn(prefix) {
  return function (type) {
    return prefix + '__' + type
  }
}

function generatorValueFromKey(prefix: string, obj: object): void {
  let typeFn = getActionTypeFn(prefix)
  Object.keys(obj).forEach(key => obj[key] = typeFn(key))
}

export const APP = {
  INIT_USER: null,
}

export const QUESTION_LIST = {
  FETCH_LIST: null,
}

export const ANSWER_LIST = {
  FETCH_LIST: null,
  ADD_ANSWER: null,
  UPDATE_ANSWER: null,
}

generatorValueFromKey('APP', APP)
generatorValueFromKey('QUESTION_LIST', QUESTION_LIST)
generatorValueFromKey('ANSWER_LIST', ANSWER_LIST)

