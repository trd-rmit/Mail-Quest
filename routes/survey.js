const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const Survey = mongoose.model('surveys')

module.exports = app => {

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({
            _user: req.user.id
        })
        res.send(surveys)
    })

    app.get('/api/surveys/submit', (req, res) => {
        res.send("Thanks for voting")
    })

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body
        const recipientsArr = recipients.split(',').map(email => ({ email: email.trim() }))
        const survey = new Survey({
            title, subject, body,
            recipients: recipientsArr,
            _user: req.user.id,
            dateSent: Date.now()
        })

        const mailer = new Mailer(survey, surveyTemplate(survey))
        try {
            await mailer.send()
            await survey.save()
            req.user.credits -= recipientsArr.length
            const user = await req.user.save()
            res.send(user)
        } catch (err) {
            res.status(422).send(err)
        }
    })
}