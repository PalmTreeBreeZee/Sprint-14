// build your `/api/projects` router here
const router = require('express').Router()
const projects = require('./model')
const { test, changeToBool, validation, posting } = require('./middleware')

router.get('/', changeToBool, async (req, res, next) => {

})
router.post('/', validation, posting, (req, res, next) => {

})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customeMessage: 'Something went wrong'
    })
})
module.exports = router