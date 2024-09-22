

// async function changeBool(req, res, next) {
//     let info = []
//     await find().then(task => {
//         for (let x = 0; x < task.length; x++) {
//             if (task[x].task_completed === 0) {
//                 task[x].task_completed = !!task[x].task_completed
//                 console.log(task[x].task_completed)
//                 info.push(task[x])
//             } else {
//                 task[x].task_completed = true
//                 info.push(task[x])

//             }
//         }
//         res.send(info)
//     })
//     next()
// }
// async function posting(req, res, next) {
//     let info = []

//     await post(req.body)
//     await find().then(task => {
//         for (let x = 0; x < task.length; x++) {
//             if (task[x].task_completed === 0) {
//                 task[x].task_completed = !!task[x].task_completed
//                 info.push(task[x])
//             } else {
//                 task[x].task_completed = true
//                 info.push(task[x])

//             }
//         }
//     })
//     res.send(info[(info.length - 1)])
//     next()

// }
async function validation(req, res, next) {
    const { task_description, project_id } = req.body
    try {
        if (!task_description) {
            throw {
                status: 400,
                message: "Task must have description"
            }
        }
        if (!project_id || isNaN(project_id) || parseInt(project_id) <= 0) {
            throw {
                status: 400,
                message: "Task must have valid project id"
            }
        }
        next()
    } catch (err) {
        next(err)
    }

}
module.exports = { validation }