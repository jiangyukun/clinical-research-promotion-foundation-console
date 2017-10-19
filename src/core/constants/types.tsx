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
  FETCH_BD: null,
  FETCH_BDPC: null,
  FETCH_RECENT_OPEN_LIST: null,
  FETCH_OPERATION_HISTORY_LIST: null,
  FETCH_ACCOUNT_INFO: null,
  CHANGE_PASSWORD: null,
  UPDATE_USER_STATUS: null,
  REFRESH_USER_STATUS: null
}

export const TODO_REMIND = {
  FETCH_LIST: null,
  FETCH_MY_LIST: null,
  FETCH_COMPLETE_LIST: null,
  FETCH_USER_CATEGORY_INFO: null,
  FETCH_RELEVANT_ITEM_LIST: null,
  SEND_REMIND: null,
  UPDATE_REMIND_STATUS: null,
  FETCH_UNREAD_REMIND_AMOUNT: null,
  CLEAR_REMIND_AMOUNT: null
}

export const CUSTOMER = {
  FETCH_LIST: null,
  FETCH_BD_LIST: null,
  QUERY_SIMILAR_NAME: null,
  ADD_CUSTOMER: null,
  FETCH_BASIC_INFO: null,
  REMOVE_CUSTOMER: null,
  UPDATE_CUSTOMER: null,
  FETCH_CUSTOMER_DETAIL: null,
  UPDATE_BD_AND_BDPC: null,
  FETCH_CUSTOMER_BD_BDPC: null,
  APPLY_BDPC_FOLLOW_UP: null,

  ADD_SUB_COMPANY: null,
  UPDATE_SUB_COMPANY: null,
  REMOVE_SUB_COMPANY: null,

  ADD_CONTACT: null,
  UPDATE_CONTACT: null,
  REMOVE_CONTACT: null,

  FETCH_CDA_LIST: null,
  FETCH_CDA_DETAIL: null,
  ADD_CDA: null,
  UPDATE_CDA: null,
  REMOVE_CDA: null,
  FETCH_PROJECT_LIST: null,
  FETCH_CONTACT_LIST: null,

  ADD_SUPPLIER: null,
  UPDATE_SUPPLIER: null,
  FETCH_LAST_SUPPLIER_DETAIL: null,
  FETCH_MSA_LIST: null,
  ADD_MSA: null,
  UPDATE_MSA: null,
  REMOVE_MSA: null,

  FETCH_RFI_LIST: null,
  FETCH_LAST_RFI_DETAIL: null,
  ADD_RFI: null,
  UPDATE_RFI: null,
  REMOVE_RFI: null,

  FETCH_VISIT_RECORD_LIST: null,
  ADD_VISIT_RECORD: null,
  UPDATE_VISIT_RECORD: null,
  REMOVE_VISIT_RECORD: null,
  UPDATE_REMARK_AND_ATTACHMENT: null,
  FETCH_CUSTOMER_REMARK_ATTACHMENT: null
}

export const PROJECT = {
  FETCH_LIST: null,
  FETCH_PROJECT_DETAIL: null,
  UPDATE_BD_AND_BDPC: null,
  FETCH_PROJECT_BD_BDPC: null,
  FETCH_CLIENT_LIST: null,
  ADD_PROJECT_INFO: null,
  UPDATE_PROJECT_INFO: null,
  ADD_BEFORE_QUOTATION: null,
  UPDATE_BEFORE_QUOTATION: null,
  ADD_AFTER_QUOTATION: null,
  UPDATE_AFTER_QUOTATION: null,
  UPDATE_REMARK_ATTACHMENT: null,
  REMOVE_PROJECT: null,
  FETCH_PROJECT_REMARK_ATTACHMENT: null
}

export const CONTRACT = {
  FETCH_LIST: null,
  FETCH_CONTRACT_DETAIL: null,
  FETCH_PROJECT_LIST: null,
  UPDATE_BD_AND_BDPC: null,
  FETCH_CONTRACT_BD_BDPC: null,
  FETCH_CONTRACT_CODE_PREFIX: null,
  ADD_CONTRACT: null,
  UPDATE_CONTRACT: null,
  ADD_BEFORE_SIGN: null,
  UPDATE_BEFORE_SIGN: null,
  FETCH_CLIENT_INFO_FROM_PROJECT: null,
  ADD_AFTER_SIGN: null,
  FETCH_AFTER_SIGN: null,
  UPDATE_AFTER_SIGN: null,
  FETCH_COLLECTION_LIST: null,
  UPDATE_COLLECTION: null,
  FETCH_INSTITUTION_LIST: null,
  FETCH_INSTITUTION_INFO: null,
  UPDATE_REMARK_ATTACHMENT: null,
  FETCH_CONTRACT_REMARK_ATTACHMENT: null,
  REMOVE_CONTRACT: null,
  SUBMIT_BILL_APPLY: null
}

export const RECYCLE_BIN = {
  FETCH_LIST: null,
  FETCH_DETAIL: null,
}

export const ACCOUNT_MANAGE = {
  FETCH_LIST: null,
  ADD_ACCOUNT: null,
  UPDATE_ACCOUNT: null,
  DISABLE_ACCOUNT: null,
  RESET_PASSWORD: null,
}

generatorValueFromKey('APP', APP)
generatorValueFromKey('TODO_REMIND', TODO_REMIND)
generatorValueFromKey('PROJECT', PROJECT)
generatorValueFromKey('CUSTOMER', CUSTOMER)
generatorValueFromKey('CONTRACT', CONTRACT)
generatorValueFromKey('RECYCLE_BIN', RECYCLE_BIN)
generatorValueFromKey('ACCOUNT_MANAGE', ACCOUNT_MANAGE)
