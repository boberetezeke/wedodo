import * as types from './types'

export function loginSuccess() {
  return { type: types.LOGIN_SUCCESS }
}

export function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS }
}
