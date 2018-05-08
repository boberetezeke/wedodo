import initialState from '../../store/initialState'
import * as types from './types'

export default function loginStateReducer(state = {loggedIn: initialState.loggedIn}, action) {
  console.log("in loginStateReducer: with action:")
  console.log(action)
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      var newState = {
        ...state,
        loggedIn: true
      };
      console.log(newState);
      return newState;
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state
  }
}
