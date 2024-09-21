// build your `Resource` model here
//needs a get and a post
const db = require('../../data/dbConfig')

function find() {
    return db('resources')
}
function post(resource) {
    return db('resources')
        .insert(resource)
}
module.exports = { find, post }