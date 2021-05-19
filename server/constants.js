const EMAIL_LEN_MAX = 64
const PASSWORD_LEN_MIN = 6
const EMAIL_REGEX =
    /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
const NAME_REGEX = /^[a-zA-Z\s]{3,20}$/

module.exports = {
    EMAIL_LEN_MAX,
    PASSWORD_LEN_MIN,
    EMAIL_REGEX,
    NAME_REGEX,
}
