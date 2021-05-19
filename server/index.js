require('dotenv').config()
const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const morgan = require('morgan')

const connectDB = require('./config/db')
const { notFoundHandler, errorHandler } = require('./middleware/error')
const userRoutes = require('./userRoutes')

// Database
connectDB()

const app = express()

// adding morgan as middleware to log http requests in the console
if ((process.env.NODE_ENV = 'development')) {
    app.use(morgan('dev'))
}

// Middleware
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json({ limit: '30mb', extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Keen API Running')
})

// Routes
app.use('/api/user', userRoutes)

// Middleware
app.use(notFoundHandler)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

// starting the server
app.listen(PORT, () => {
    console.log(chalk.blue(`Server running on port ${PORT}`))
})
