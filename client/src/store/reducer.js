import * as actionTypes from './actionTypes'

// ALERT *****************************************************************************************
export const alertReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ALERT_ADD:
            return [...state, action.payload]

        case actionTypes.ALERT_REMOVE:
            return state.filter((alert) => alert._id !== action.payload)

        default:
            return state
    }
}

// USER ********************************************************************************************
export const userRegisterReducer = (
    state = { loading: false, error: null, success: false },
    action
) => {
    switch (action.type) {
        case actionTypes.USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            }

        case actionTypes.USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
            }

        case actionTypes.USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false,
            }

        default:
            return state
    }
}

export const userLoginReducer = (
    state = { loading: false, error: null, success: false, user: null },
    action
) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                user: null,
                success: false,
            }

        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
                success: true,
            }

        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                user: null,
                success: false,
            }

        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                user: null,
            }

        default:
            return state
    }
}
