import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from '../../utils/hooks/useForm'
import { userLogin } from '../../store/action'

const initialInputVals = {
    email: '',
    password: '',
}

const LoginForm = () => {
    const dispatch = useDispatch()

    const { loading } = useSelector((state) => state.userLogin)

    const { inputVals, handleOnChange } = useForm(initialInputVals)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(userLogin(inputVals))
    }

    return (
        <div className="loginForm">
            <h2>Login Here!</h2>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={inputVals.email}
                        onChange={handleOnChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={inputVals.password}
                        onChange={handleOnChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading}>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default LoginForm
