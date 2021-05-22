import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { userLogout } from './store/action'
import setAuthHeader from './utils/setAuthHeader'
import Alerts from './components/Alerts'
import Login from './screens/Login'
import Dashboard from './screens/Dashboard'

const App = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.userLogin)

    useEffect(() => {
        if (localStorage.getItem('user')) {
            const token = JSON.parse(localStorage.getItem('user')).token

            // checking if the already present auth token is expired or not
            const decodedToken = jwtDecode(token)
            if (decodedToken.exp * 1000 < Date.now()) {
                dispatch(userLogout())
            } else {
                // if a valid auth token is present then set the auth headers to all axios requests
                setAuthHeader(token)
            }
        }
    }, [dispatch])

    return (
        <div className="app">
            <Router>
                <Alerts />
                {user ? <Route component={Dashboard} /> : <Route component={Login} />}
            </Router>
        </div>
    )
}

export default App
