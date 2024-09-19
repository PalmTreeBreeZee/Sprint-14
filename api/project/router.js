// build your `/api/projects` router here
const router = require('express').Router()
const projects = require('./model')
const { test } = require('./middleware')

router.get('/', test, (req, res, next) => {
    projects.find()
        .then(project => {
            res.json(project)
        })
        .catch(next)

})
router.post('/', (req, res, next) => {
    projects.post(req.body)
        .then(res.json(req.body))
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customeMessage: 'Something went wrong'
    })
})
module.exports = router