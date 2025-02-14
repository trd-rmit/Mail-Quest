const passport = require('passport')
const mongoose = require('mongoose')
const _ = require('lodash')
const passportGoogleStrategy = require('passport-google-oauth20').Strategy

const NODE_GOOGLE_CLIENT_ID = process.env.NODE_GOOGLE_CLIENT_ID
const NODE_GOOGLE_CLIENT_SECRET = process.env.NODE_GOOGLE_CLIENT_SECRET

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

passport.use(new passportGoogleStrategy({
    clientID: NODE_GOOGLE_CLIENT_ID,
    clientSecret: NODE_GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    // console.log('access token:', accessToken)
    // console.log('refresh token:', refreshToken)
    // console.log('profile:', profile)
    const user = await User.findOne({ googleID: profile.id})
        if (user) {
            done(null, user)
        } else {
            const newUser = await new User({ googleID: profile.id }).save()
            done(null, newUser)
        }
}))