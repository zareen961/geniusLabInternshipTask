import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { alertReducer, userLoginReducer, userRegisterReducer } from './reducers'

const reducers = combineReducers({
    alerts: alertReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
})

// persisting the already logged in state of a user
const userFromStorage = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null

const initialState = {
    userLogin: { user: userFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
