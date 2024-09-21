// build your `/api/tasks` router here
const router = require('express').Router()
const tasks = require('./model')
const { changeBool, posting, validation } = require('./middleware')

router.get('/', changeBool, (req, res, next) => {

})

router.post('/', validation, posting, (req, res, next) => {


})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customeMessage: 'Something went wrong'
    })
})
module.exports = router