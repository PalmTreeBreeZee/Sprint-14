const { find, post } = require('./model')

async function validation(req, res, next) {
    const { resource_name } = req.body
    const existingResource = await find()
        .where("resource_name", resource_name)
        .first()
    if (existingResource) {
        return res.status(409).send('There is already one of those')
    }
    next()
}

module.exports = { validation }