import { combineReducers } from '@reduxjs/toolkit'
import guestReducer from './guest/reducer'

const rootReducer = combineReducers({
  guest: guestReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
