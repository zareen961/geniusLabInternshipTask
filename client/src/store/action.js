import { v4 } from 'uuid'

import axiosInstance from '../utils/axiosInstance'
import * as actionTypes from './actionTypes'
import setAuthHeader from '../utils/setAuthHeader'

// to add an Alert
export const alertAdd =
    (msg, alertType, timeout = 5000) =>
    (dispatch) => {
        const _id = v4()
        dispatch({
            type: actionTypes.ALERT_ADD,
            payload: { _id, msg, alertType },
        })

        setTimeout(
            () =>
                dispatch({
                    type: actionTypes.ALERT_REMOVE,
                    payload: _id,
                }),
            timeout
        )
    }

// to register a new user
export const userRegister = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.USER_REGISTER_REQUEST,
        })

        await axiosInstance.post('/api/user', userData)

        dispatch({
            type: actionTypes.USER_REGISTER_SUCCESS,
        })

        dispatch(alertAdd('User Registered!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.USER_REGISTER_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}

// to log in an existing user
export const userLogin = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.USER_LOGIN_REQUEST,
        })

        const { data } = await axiosInstance.post('/api/user/login', userData)

        dispatch({
            type: actionTypes.USER_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('user', JSON.stringify(data))

        if (localStorage.getItem('user')) {
            const token = JSON.parse(localStorage.getItem('user')).token
            setAuthHeader(token)
        }

        dispatch(alertAdd('User Logged In!', 'success'))
    } catch (err) {
        const errorMsg =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message

        dispatch({
            type: actionTypes.USER_LOGIN_FAIL,
            payload: errorMsg,
        })

        dispatch(alertAdd(errorMsg, 'error'))
    }
}

// to logout user
export const userLogout = () => (dispatch) => {
    localStorage.removeItem('user')
    dispatch({ type: actionTypes.USER_LOGOUT })
    dispatch(alertAdd('User Logged out!', 'success'))
}
