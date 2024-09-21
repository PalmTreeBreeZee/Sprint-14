// build your `Task` model here
//needs a post and a get
const db = require('../../data/dbConfig')

function find() {
    return db('tasks').leftJoin('projects', 'tasks.project_id', 'projects.project_id')
}

function post(task) {
    return db('tasks')
        .insert(task)
}
function findId(id) {
    return db('tasks').leftJoin('projects', 'tasks.project_id', 'projects.project_id')
        .where('tasks.project_id', id)

}


module.exports = { find, post, findId }