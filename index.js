const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')

require('./models/User')
require('./models/Survey')
require('./services/passport')

const NODE_MONGODB_URL = process.env.NODE_MONGODB_URL
const NODE_COOKIE_SECRET = process.env.NODE_COOKIE_SECRET

const authRoutes = require('./routes/auth')
const billingRoutes = require('./routes/billing')
const surveyRoutes = require('./routes/survey')

mongoose.connect(NODE_MONGODB_URL)

const app = express()

app.use(bodyParser.json())
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [NODE_COOKIE_SECRET]
    })
)
app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)
billingRoutes(app)
surveyRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)