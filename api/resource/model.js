// build your `Resource` model here
//needs a get and a post
const db = require('../../data/dbConfig')

function find() {
    return db('resources')
}

module.exports = { find }