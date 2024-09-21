// build your `/api/resources` router here
const router = require('express').Router()
const resources = require('./model')
const { validation } = require('./middleware')

router.get('/', (req, res, next) => {
    resources.find()
        .then(resource => {
            res.json(resource)
        })
        .catch(next)

})
router.post('/', validation, (req, res, next) => {
    let info = []
    resources.post(req.body)
        .then(
            res.send({ "resource_name": `${req.body.resource_name}` })
        )

})
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customeMessage: 'Something went wrong'
    })
})
module.exports = router