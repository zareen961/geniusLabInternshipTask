const {
    EMAIL_LEN_MAX,
    EMAIL_REGEX,
    NAME_REGEX,
    PASSWORD_LEN_MIN,
} = require('./constants')

const validateUserInputs = (inputData) => {
    const { email, firstName, lastName, password } = inputData

    if (email) {
        if (email.trim().length > EMAIL_LEN_MAX) {
            return {
                isValid: false,
                message: 'Email address too long!',
            }
        } else {
            if (!email.match(EMAIL_REGEX)) {
                return {
                    isValid: false,
                    message: 'Please provide a valid email address!',
                }
            }
        }
    } else {
        return {
            isValid: false,
            message: 'Email address is needed!',
        }
    }

    // validating first name
    if (firstName) {
        if (!firstName.match(NAME_REGEX)) {
            return {
                isValid: false,
                message: 'Please enter a valid first name!',
            }
        }
    } else {
        return {
            isValid: false,
            message: 'You cannot create an account without providing your first name!',
        }
    }

    // validating last name
    if (lastName) {
        if (!lastName.match(NAME_REGEX)) {
            return {
                isValid: false,
                message: 'Please enter a valid last name!',
            }
        }
    }

    // validating password
    if (password) {
        if (password.length < PASSWORD_LEN_MIN) {
            return {
                isValid: false,
                message: 'Keeping short passwords is risky!',
            }
        }
    } else {
        return {
            isValid: false,
            message: 'Password must be provided, in case you wish to login!',
        }
    }

    return {
        isValid: true,
    }
}

module.exports = validateUserInputs
