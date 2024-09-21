const { find, post, findId } = require('./model')

async function changeBool(req, res, next) {
    let info = []
    await find().then(task => {
        for (let x = 0; x < task.length; x++) {
            if (task[x].task_completed === 0) {
                task[x].task_completed = !!task[x].task_completed
                console.log(task[x].task_completed)
                info.push(task[x])
            } else {
                task[x].task_completed = true
                info.push(task[x])

            }
        }
        res.send(info)
    })
    next()
}
async function posting(req, res, next) {
    let info = []

    await post(req.body)
    await find().then(task => {
        for (let x = 0; x < task.length; x++) {
            if (task[x].task_completed === 0) {
                task[x].task_completed = !!task[x].task_completed
                info.push(task[x])
            } else {
                task[x].task_completed = true
                info.push(task[x])

            }
        }
    })
    res.send(info[(info.length - 1)])
    next()

}
async function validation(req, res, next) {
    if (!req.body.task_description) {
        return res.status(400).send('Task description name not found')
    }
    if (!req.body.project_id) {
        return res.status(400).send('Project ID not found')
    }
    const isHere = await findId(req.body.project_id)
    if (!isHere) {
        return res.status(400).send('There is no matching project')
    }
    next()
}
module.exports = { changeBool, posting, validation }