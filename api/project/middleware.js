const { find, post } = require('./model')
async function test(req, res, next) {
    console.log(req.body)
    next()
}

async function changeToBool(req, res, next) {
    let info = []
    await find().then(project => {
        for (let x = 0; x < project.length; x++) {
            if (project[x].project_completed === 0) {
                project[x].project_completed = !!project[x].project_completed
                console.log(project[x].project_completed)
                info.push(project[x])
            } else {
                project[x].project_completed = true
                info.push(project[x])

            }
        }
        res.send(info)
    })
    next()
}

async function validation(req, res, next) {
    if (!req.body.project_name) {
        return res.status(400).send('Project name not found')
    }
    next()
}

async function posting(req, res, next) {
    let info = []

    await post(req.body)
    await find().then(project => {
        for (let x = 0; x < project.length; x++) {
            if (project[x].project_completed === 0) {
                project[x].project_completed = !!project[x].project_completed
                console.log(project[x].project_completed)
                info.push(project[x])
            } else {
                project[x].project_completed = true
                info.push(project[x])

            }
        }
    })
    res.send(info[(info.length - 1)])
    next()

}
module.exports = { test, changeToBool, validation, posting } 