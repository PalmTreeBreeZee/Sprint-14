const { find, post } = require('./model')

async function validation(req, res, next) {
    let info = []
    find().then(
        resource => {
            info.push(resource)
        }
    )
    for (let x = 0; x < info.length; x++) {
        if (info[0][x].resource_name === req.body.resource_name) {
            return res.status(404).send('That resource name is already taken')
        }
    }
    next()
}

module.exports = { validation }