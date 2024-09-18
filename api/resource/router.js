// build your `/api/resources` router here
const router = require('express').Router()
const resources = require('./model')

router.get('/', (req, res, next) => {
    resources.find()
        .then(resource => {
            res.json(resource)
        })
        .catch(next)

})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customeMessage: 'Something went wrong'
    })
})
module.exports = router