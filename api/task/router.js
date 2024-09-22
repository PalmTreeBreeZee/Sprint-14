// build your `/api/tasks` router here
const router = require('express').Router()
const tasks = require('./model')
const { validation } = require('./middleware')

router.get('/', async (req, res, next) => {
    try {
        const getTasks = await tasks.find()
        res.status(200).json(getTasks)
    } catch (err) {
        next(err)
    }
})

router.post('/', validation, async (req, res, next) => {
    try {
        const newTask = await tasks.post(req.body)
        res.status(200).json(newTask)
    }
    catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customeMessage: 'Something went wrong'
    })
})
module.exports = router