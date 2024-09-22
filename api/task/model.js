// build your `Task` model here
//needs a post and a get
const db = require('../../data/dbConfig')

async function find() {
    const finalTasks = await db('tasks').leftJoin('projects as p', 'tasks.project_id', 'p.project_id')
        .select("task_id", "task_description", "task_notes", "task_completed", "p.project_name", "p.project_description")
    const result = finalTasks.map((tasks) => {
        return {
            ...tasks,
            task_completed: tasks.task_completed ? true : false
        }
    })
    return result
}

async function post(task) {
    const [task_id] = await db('tasks').insert(task)
    const finalTask = await db('tasks').where({ task_id }).first()
    if (!finalTask) {
        return null
    }
    finalTask.task_completed = finalTask.task_completed ? true : false
    return finalTask
}



module.exports = { find, post }