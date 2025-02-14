const NODE_STRIPE_SECRET_KEY = process.env.NODE_STRIPE_SECRET_KEY
const stripe = require('stripe')(NODE_STRIPE_SECRET_KEY)
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = stripe.charges.create({
            amount: 500,
            currency: 'usd',
            source: req.body.id
        })

        req.user.credits += 5
        const user = await req.user.save()
        res.send(user)
    })
}