// build your `/api/projects` router here
const router = require('express').Router()
const projects = require('./model')
const { test, changeToBool } = require('./middleware')

router.get('/', changeToBool, async (req, res, next) => {

})
router.post('/', test, (req, res, next) => {
    projects.post(req.body)
        .then(
            res.send(req.body)
        )
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customeMessage: 'Something went wrong'
    })
})
module.exports = router