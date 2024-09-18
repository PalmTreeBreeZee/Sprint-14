// build your `/api/resources` router here
const router = require('express').Router()

router.use('*', (req, res, next) => {
    res.json({ api: 'up' })
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customeMessage: 'Something went wrong'
    })
})
module.exports = router