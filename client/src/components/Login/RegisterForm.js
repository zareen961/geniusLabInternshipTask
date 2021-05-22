import React, { useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from '../../utils/hooks/useForm'
import { alertAdd, userRegister } from '../../store/action'

const initialInputVals = {
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    password: '',
    passwordConfirm: '',
}

const RegisterForm = () => {
    const dispatch = useDispatch()

    const { loading, success } = useSelector((state) => state.userRegister)

    const { inputVals, handleOnChange, handleReset, customSetInputVals } =
        useForm(initialInputVals)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (inputVals.password !== inputVals.passwordConfirm) {
            alertAdd('Passwords do not match!', 'error')
        } else {
            dispatch(userRegister(inputVals))
        }
    }

    useEffect(() => {
        if (success) {
            handleReset()
        }
    }, [success, handleReset])

    return (
        <div className="registerForm">
            <h2>Sign Up!</h2>
            <Form onSubmit={handleOnSubmit} className="registerForm__form">
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter First Name"
                                required
                                name="firstName"
                                value={inputVals.firstName}
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Last Name"
                                name="lastName"
                                value={inputVals.lastName}
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                required
                                name="email"
                                value={inputVals.email}
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicPhoto">
                            <Form.Label>Choose Profile Photo</Form.Label>
                            <label className="registerForm__imageSelect">
                                <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) =>
                                        customSetInputVals('image', base64)
                                    }
                                />
                                {inputVals.image ? 'Image Selected' : 'Choose an Image'}
                            </label>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                        name="password"
                        value={inputVals.password}
                        onChange={handleOnChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        required
                        name="passwordConfirm"
                        value={inputVals.passwordConfirm}
                        onChange={handleOnChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading}>
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default RegisterForm
