import { userConstants } from '../constants/user.constants'
import { alertConstants } from '../constants/alert.constants'

import { alert } from './alert.reducer'
import { authentication } from './authentication.reducer'
import { registration } from './registration.reducer'
import { users } from './users.reducer'

export function auth(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
    case alertConstants.ERROR:
    case alertConstants.CLEAR:
      return {...state, alert: alert(state, action)}

    case userConstants.LOGIN_REQUEST:
    case userConstants.LOGIN_SUCCESS:
    case userConstants.LOGIN_FAILURE:
    case userConstants.LOGOUT:
      return {...state, authentication: authentication(state, action)}

    case userConstants.REGISTER_REQUEST:
    case userConstants.REGISTER_SUCCESS:
    case userConstants.REGISTER_FAILURE:
      return {...state, registration: registration(state, action)}

    case userConstants.GETALL_REQUEST:
    case userConstants.GETALL_SUCCESS:
    case userConstants.GETALL_FAILURE:
    case userConstants.DELETE_REQUEST:
    case userConstants.DELETE_SUCCESS:
    case userConstants.DELETE_FAILURE:
      return {...state, users: users(state, action)}

    default:
      return state;
  }
}
