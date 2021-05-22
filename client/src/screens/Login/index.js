import React from 'react'

import LoginForm from '../../components/Login/LoginForm'
import RegisterForm from '../../components/Login/RegisterForm'
import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <h1>Login to Dashboard or Register </h1>
            <div className="login__forms">
                <LoginForm />
                <RegisterForm />
            </div>
        </div>
    )
}

export default Login
