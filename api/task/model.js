// build your `Task` model here
//needs a post and a get
const db = require('../../data/dbConfig')

function find() {
    return db('tasks')
}

module.exports = { find }