const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const User = require('./UserModel')
const validateUserInputs = require('./userValidators')

const userRegister = asyncHandler(async (req, res) => {
    const { email, firstName, lastName, image, password } = req.body

    const { isValid, message } = validateUserInputs(req.body)
    if (!isValid) {
        res.status(500)
        throw new Error(message)
    }

    //  checking for the uniqueness fo email address
    const isUniqueEmail = await User.countDocuments({ email })
    if (isUniqueEmail > 0) {
        res.status(400)
        throw new Error('Email is already registered! Try Logging in.')
    }

    const newUser = await User.create({
        email,
        firstName,
        lastName,
        image,
        password,
    })

    if (newUser) {
        res.status(201).json({
            message: 'New User Registered!',
        })
    } else {
        res.status(500)
        throw new Error("Your account couldn't be registered! Try again.")
    }
})

const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const foundUser = await User.findOne({ email })

    if (foundUser && (await foundUser.matchPassword(password))) {
        // now deleting the password from the foundUser object before sending to frontend
        foundUser.password = null

        res.send({
            userInfo: foundUser,
            token: jwt.sign({ _id: foundUser._id }, process.env.JWT_SECRET, {
                expiresIn: '24h',
            }),
        })
    } else {
        res.status(401)
        throw new Error("Wrong Credentials! Can't log you in.")
    }
})

module.exports = { userLogin, userRegister }
