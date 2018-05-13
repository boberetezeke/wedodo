import { combineReducers } from 'redux'
import loginStateReducer from './loginState/reducer'
import { auth } from "../app/authentication/reducers/auth.reducer";

export const rootReducer = combineReducers({
  auth
})
