// build your `/api/tasks` router here
const router = require('express').Router()
const tasks = require('./model')

router.get('/', (req, res, next) => {
    tasks.find()
        .then(task => {
            res.json(task)
        })
        .catch(next)

})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customeMessage: 'Something went wrong'
    })
})
module.exports = router