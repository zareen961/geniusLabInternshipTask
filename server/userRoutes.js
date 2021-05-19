const express = require('express')

const { userRegister, userLogin } = require('./userController')

const router = express.Router()

// @route: POST /api/user
// @desc: To register a new user
// @access: Public
router.post('/', userRegister)

// @route: POST /api/user/login
// @desc: To login an existing user
// @access: Public
router.post('/login', userLogin)

module.exports = router
