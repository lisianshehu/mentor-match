import { combineReducers } from 'redux'

import loginReducer from './loginReducer'
import addUserReducer from './addUserReducer'

const rootReducer = combineReducers({
    loginReducer,
    addUserReducer
})

export default rootReducer